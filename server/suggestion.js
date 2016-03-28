import Sequelize from "sequelize";

var Suggestion;

class SuggestionData {
    schemaDefinition(sequelize) {
        Suggestion = sequelize.define('suggestion', {
            id : {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            newCourseUrl: {
                type: Sequelize.STRING,
                isUrl: true
            },
            newFireUrl: {
                type: Sequelize.STRING,
                isUrl: true
            },
            ipAddr: {
                type: Sequelize.STRING
            }
        });
    }

    getSuggestion() {
        return Suggestion;
    }

    getAll(res) {
        Suggestion.findAll({
            order: 'id ASC'
        }).then(res);
    }

    create(courseId, newCourseUrl, newFireUrl, ipAddress, res, req) {
        Suggestion.create({
            newCourseUrl: newCourseUrl,
            newFireUrl: newFireUrl,
            ipAddr: ipAddress,
            courseId: courseId
        }).then(res, req);
    }
}

export default new SuggestionData();