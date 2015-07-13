import Sequelize from "sequelize";
import bootstrapData from "./courseBootstrap.json";

var Course;

class CourseData {
    schemaDefinition(sequelize) {
        Course = sequelize.define('course', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            courseCode: {
                type: Sequelize.STRING,
                allowNull: false
            },
            courseName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            courseUrl: {
                type: Sequelize.STRING,
                isUrl: true,
                allowNull: false
            },
            fireUrl: {
                type: Sequelize.STRING,
                isUrl: true
            }
        });

        //Course.sync();
        Course.sync({force: true}).then(() => {
            bootstrapData.forEach((course) => Course.create({courseCode: course.courseCode, courseName: course.courseName, courseUrl: course.courseUrl, fireUrl: course.fireUrl}));
            return true;
        });
    }

    getAll(res) {
        Course.findAll().then(res);
    }
    getById(id, res) {
        Course.findOne({
            where: {id: id},
            attributes: ['id', 'courseCode', 'courseName', 'courseUrl', 'fireUrl']
        }).then(res);
    }
    getByIds(ids, res) {
        let sortOrder = 'ASC';
        if (ids.length == 2 && ids[0] > ids[1]) {
            sortOrder = 'DESC';
        }
        Course.findAll({
            where: {
                id: {
                    $in: ids
                }
            },
            order: [['id', sortOrder]]
        }).then(res);
    }

    create(courseCode, courseName, courseUrl, fireUrl, res, req) {
        Course.create({courseCode: courseCode, courseName: courseName, courseUrl: courseUrl, fireUrl: fireUrl}).then(res, req);
    }

    updateCourse(id, courseCode, courseName, courseUrl, fireUrl, res, req) {
        Course.update({courseCode: courseCode, courseName: courseName, courseUrl: courseUrl, fireUrl: fireUrl}, {
            where: {
                id: id
            }
        }).then(res, req);
    }

    deleteCourse(id, res, req) {
        Course.destroy({
            where: {
                id: id
            }
        }).then(res, req);
    }
}

export default new CourseData();