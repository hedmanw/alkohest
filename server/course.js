import Sequelize from "sequelize";

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
                unique: true,
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

        Course.sync();
    }

    getAll(res) {
        Course.findAll({
            order: 'id ASC'
        }).then(res);
    }
    getById(id, res) {
        Course.findOne({
            where: {id: id},
            attributes: ['id', 'courseCode', 'courseName', 'courseUrl', 'fireUrl']
        }).then(res);
    }
    getByIds(ids, res) {
        Course.findAll({
            where: {
                id: {
                    $in: ids
                }
            }
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