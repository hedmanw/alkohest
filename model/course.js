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
                allowNull: false
            },
            fireUrl: {
                type: Sequelize.STRING
            }
        });

        Course.sync();
    }

    getAll(res) {
        Course.findAll().then(res);
    }
    getById(id, res) {
        Course.findById(id).then(res);
    }
    getByIds(ids, res) {
        return ids.map(id => this.getById(id, res))
    }
}

export default new CourseData();