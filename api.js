import courses from './model/course.js'

function registerPaths(app) {
    app.get('/course', function(req, res) {
        let ids = req.query.ids;
        if (ids) {
            res.send(courses.getByIds(JSON.parse(ids)))
        }
        else {
            res.send(courses.getAll())
        }
    });

    app.post('/course', function(req, res) {
        if (isAuthorized(req)) {
            let courseCode = req.body.courseCode;
            let courseName = req.body.courseName;
            let courseUrl = req.body.courseUrl;
            let fireUrl = req.body.fireUrl;
            res.send("Yeah man, " + courseCode + ": " + courseName + "\n");
        }
        else {
            res.status(401).send("Unauthorized.");
        }
    });

    app.get('/course/:course_id', function(req, res) {
        res.send(courses.getById(req.params.course_id));
    });

    app.post('/course/:course_id', function(req, res) {
        if (isAuthorized(req)) {
            let courseId = req.params.course_id;
            res.send(courseId + "\n");
        }
        else {
            res.status(401).send("Unauthorized.");
        }
    });

    app.delete('/course/:course_id', function(req, res) {
        if (isAuthorized(req)) {
            let courseId = req.params.course_id;
            res.send(courseId + "\n");
        }
        else {
            res.status(401).send("Unauthorized.");
        }
    });

    function isAuthorized(req) {
        let apiKey = req.get('x-api-key');
        return (typeof apiKey !== 'undefined' && apiKey === 'hestnyckel');
    }
}

export default registerPaths;