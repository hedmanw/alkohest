import express from 'express';
import bodyParser from 'body-parser';
import courses from './model/course.js'

let app = express();

app.use(express.static(__dirname + '/build'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
    let courseCode = req.body.courseCode;
    let courseName = req.body.courseName;
    let courseUrl = req.body.courseUrl;
    let fireUrl = req.body.fireUrl;

    res.send("Yeah man, " + courseCode + ": " + courseName + "\n");
});

app.get('/course/:course_id', function(req, res) {
    res.send(courses.getById(req.params.course_id));
});

app.post('/course/:course_id', function(req, res) {
    let courseId = req.params.course_id;
    res.send(courseId + "\n");
});

app.delete('/course/:course_id', function(req, res) {
    let courseId = req.params.course_id;
    res.send(courseId + "\n");
});

let port = process.argv[2] || 8080;

let server = app.listen(port, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log('Alkohest listening at http://%s:%s', host, port);
});
