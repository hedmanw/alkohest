import courses from './course.js'
import suggestions from './suggestion'
import appConf from "./../out/environmentConfig.json"

function createSchemata(sequelize) {
    courses.schemaDefinition(sequelize);
    suggestions.schemaDefinition(sequelize);
    courses.getCourse().hasMany(suggestions.getSuggestion());
    suggestions.getSuggestion().belongsTo(courses.getCourse());

    courses.getCourse().sync();
    suggestions.getSuggestion().sync();
}

function registerPaths(app) {
    app.get('/course', function(req, res) {
        let ids = req.query.ids;
        if (ids) {
            courses.getByIds(JSON.parse(ids), (courses) => res.send(courses));
        }
        else {
            courses.getAll((courses) => res.send(courses));
        }
    });

    app.get('/course/:course_id', function(req, res) {
        var courseId = req.params.course_id;
        courses.getById(courseId, (course) => {
            if (course) {
                res.send(course)
            } else {
                res.status(404).send("Could not find a course with courseId=" + courseId)
            }
        });
    });

    app.post('/admin/course', function(req, res) {
        if (isAuthorized(req)) {
            let courseCode = req.body.courseCode;
            let courseName = req.body.courseName;
            let courseUrl = req.body.courseUrl;
            let fireUrl = req.body.fireUrl;
            courses.create(courseCode, courseName, courseUrl, fireUrl, (course) => {
                res.status(201).send(course.id + "");
            }, (e) => {
                res.status(500).send(e.errors);
            });
        }
        else {
            res.status(401).send("Unauthorized.\n");
        }
    });

    app.post('/admin/course/:course_id', function(req, res) {
        if (isAuthorized(req)) {
            let courseId = req.params.course_id;
            let courseCode = req.body.courseCode;
            let courseName = req.body.courseName;
            let courseUrl = req.body.courseUrl;
            let fireUrl = req.body.fireUrl;
            courses.updateCourse(courseId, courseCode, courseName, courseUrl, fireUrl, (course) => {
                res.send(course.id + "")
            }, (e) => {
                res.status(500).send(e.errors);
            });
        }
        else {
            res.status(401).send("Unauthorized.\n");
        }
    });

    app.delete('/admin/course/:course_id', function(req, res) {
        if (isAuthorized(req)) {
            let courseId = req.params.course_id;
            courses.deleteCourse(courseId, (old) => {
                res.status(204).send();
            }, (e) => {
                res.status(500).send(e.errors);
            });
        }
        else {
            res.status(401).send("Unauthorized.\n");
        }
    });

    app.post('/suggestion', function(req, res) {
        let courseId = req.body.courseId;
        let suggestedUrl = req.body.courseUrl;
        let suggestedFire = req.body.courseFire;
        let ipAddr = req.connection.remoteAddress;
        suggestions.create(courseId, suggestedUrl, suggestedFire, ipAddr, (suggestion) => {
            res.send("OK!")
        }, (e) => {
            res.status(500).send(e.errors);
        });
    });

    app.get('/admin/suggestion', function(req, res) {
        if (isAuthorized(req)) {
            suggestions.getAll((suggestion) => res.send(suggestion));
        }
        else {
            res.status(401).send("Unauthorized.\n");
        }
    });

    function isAuthorized(req) {
        let apiKey = req.get('x-api-key');
        return apiKey === appConf.apiKey;
    }
}

export default {createSchemata, registerPaths};