import express from 'express';
import bodyParser from 'body-parser';

let app = express();

app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/course', function(req, res) {
    res.send("Hello!\n")
});

app.post('/course', function(req, res) {
    let courseCode = req.body.courseCode;
    let courseName = req.body.courseName;
    let courseUrl = req.body.courseUrl;
    let fireUrl = req.body.fireUrl;

    res.send("Yeah man, " + courseCode + ": " + courseName + "\n");
});

app.get('/course/:course_id', function(req, res) {
    let courseId = req.params.course_id;
    res.send(courseId + "\n");
});

app.post('/course/:course_id', function(req, res) {
    let courseId = req.params.course_id;
    res.send(courseId + "\n");
});

app.delete('/course/:course_id', function(req, res) {
    let courseId = req.params.course_id;
    res.send(courseId + "\n");
});

let server = app.listen(8080, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log('Alkohest listening at http://%s:%s', host, port);
});
