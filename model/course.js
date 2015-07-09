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
            Course.create({courseCode: "TDA357", courseName: "Databaser", courseUrl: "http://www.cse.chalmers.se/edu/course/TDA357/VT2015/", fireUrl: "https://xdat09.ce.chalmers.se/databases/login"});
            Course.create({courseCode: "TDA517", courseName: "Kommunikation engelska och ingenjörskompetens", courseUrl: "https://pingpong.chalmers.se/courseId/4887/content.do?id=2168510"});
            Course.create({courseCode: "DATX02", courseName: "Kandidatarbete D&IT", courseUrl: "https://pingpong.chalmers.se/launchCourse.do?id=4424"});
            Course.create({courseCode: "MVE045", courseName: "Matematisk analys", courseUrl: "https://www.youtube.com/watch?v=xrIjfIjssLE"});
            return true;
        });
    }

    getAll(res) {
        Course.findAll().then(res);
    }
    getById(id, res) {
        Course.findById(id).then(res);
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