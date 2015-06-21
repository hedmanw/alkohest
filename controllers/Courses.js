'use strict';

var url = require('url');


var Courses = require('./CoursesService');


module.exports.courseGet = function courseGet (req, res, next) {
  

  var result = Courses.courseGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.coursePost = function coursePost (req, res, next) {
  var xApiKey = req.swagger.params['x-api-key'].value;
  var courseCode = req.swagger.params['courseCode'].value;
  var courseName = req.swagger.params['courseName'].value;
  var courseHomepage = req.swagger.params['courseHomepage'].value;
  var fireUrl = req.swagger.params['fireUrl'].value;
  

  var result = Courses.coursePost(xApiKey, courseCode, courseName, courseHomepage, fireUrl);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.courseIdGet = function courseIdGet (req, res, next) {
  var id = req.swagger.params['id'].value;
  

  var result = Courses.courseIdGet(id);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.courseIdPost = function courseIdPost (req, res, next) {
  var xApiKey = req.swagger.params['x-api-key'].value;
  var id = req.swagger.params['id'].value;
  var courseCode = req.swagger.params['courseCode'].value;
  var courseName = req.swagger.params['courseName'].value;
  var courseHomepage = req.swagger.params['courseHomepage'].value;
  var fireUrl = req.swagger.params['fireUrl'].value;
  

  var result = Courses.courseIdPost(xApiKey, id, courseCode, courseName, courseHomepage, fireUrl);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.courseIdDelete = function courseIdDelete (req, res, next) {
  var xApiKey = req.swagger.params['x-api-key'].value;
  var id = req.swagger.params['id'].value;
  

  var result = Courses.courseIdDelete(xApiKey, id);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
