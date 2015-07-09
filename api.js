import courses from './model/course.js'

function createSchemata(sequelize) {
    courses.schemaDefinition(sequelize)
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

    app.post('/course', function(req, res) {
        if (isAuthorized(req)) {
            let courseCode = req.body.courseCode;
            let courseName = req.body.courseName;
            let courseUrl = req.body.courseUrl;
            let fireUrl = req.body.fireUrl;
            res.send("This is totally a location header!\n");
        }
        else {
            res.status(401).send("Unauthorized.\n");
        }
    });

    app.get('/course/:course_id', function(req, res) {
        courses.getById(req.params.course_id, (course) => res.send(course));
    });

    app.post('/course/:course_id', function(req, res) {
        if (isAuthorized(req)) {
            let courseId = req.params.course_id;
            res.send(courseId + "\n");
        }
        else {
            res.status(401).send("Unauthorized.\n");
        }
    });

    app.delete('/course/:course_id', function(req, res) {
        if (isAuthorized(req)) {
            let courseId = req.params.course_id;
            res.send(courseId + "\n");
        }
        else {
            res.status(401).send("Unauthorized.\n");
        }
    });

    function isAuthorized(req) {
        let apiKey = req.get('x-api-key');
        return apiKey === 'hestnyckel';
    }
}

export default {createSchemata, registerPaths};