'use strict';

exports.courseGet = function() {

  var examples = {};
  
  examples['application/json'] = [ {
  "course_id" : 123,
  "course_code" : "aeiou",
  "course_name" : "aeiou",
  "course_url" : "aeiou",
  "fire" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.coursePost = function(xApiKey, courseCode, courseName, courseHomepage, fireUrl) {

  var examples = {};
  
  examples['application/json'] = {
  "course_id" : 123,
  "course_code" : "aeiou",
  "course_name" : "aeiou",
  "course_url" : "aeiou",
  "fire" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.courseIdGet = function(id) {

  var examples = {};
  
  examples['application/json'] = {
  "course_id" : 123,
  "course_code" : "aeiou",
  "course_name" : "aeiou",
  "course_url" : "aeiou",
  "fire" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.courseIdPost = function(xApiKey, id, courseCode, courseName, courseHomepage, fireUrl) {

  var examples = {};
  

  
}
exports.courseIdDelete = function(xApiKey, id) {

  var examples = {};
  

  
}
