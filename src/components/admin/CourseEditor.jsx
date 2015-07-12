import React from "react";
import {Link} from "react-router";
import CourseClient from "../../clients/CourseClient.js";

let CourseEditor = React.createClass({
    getInitialState() {
        return {
            response: null
        };
    },
    approve() {
        let data = {
            courseCode: this.refs.courseCode.getDOMNode().value(),
            courseName: this.refs.courseName.getDOMNode().value(),
            courseUrl: this.refs.courseUrl.getDOMNode().value(),
            fireUrl: this.refs.fireUrl.getDOMNode().value()
        };
        // TODO: Create the callbacks for all CourseClient calls
        // The callback should really be registered one level up so this component can be redrawn/redirected/whatever accordingly?
        // check out react router if a "redirect" is in order.
        if (this.props.course) {
            CourseClient.editCourse(course.id, data);
        }
        else {
            CourseClient.create(data);
        }
    },
    delete() {
        if (this.props.course) {
            CourseClient.deleteCourse(this.props.course.id);
        }
        else {
            // TODO: Link to back
        }
    },
    render() {
        return (
            <div className="row">
                <div className="row">
                    <div className="input-field col m1">
                        <input disabled id="dbId" type="text" class="validate" value={this.props.course.id}/>
                        <label for="dbId">Database id</label>
                    </div>
                    <div className="input-field col m4">
                        <input id="courseCode" ref="courseCode" type="text" className="validate" value={this.props.course.courseCode}/>
                        <label for="courseCode">Course code</label>
                    </div>
                    <div className="input-field col m7">
                        <input id="courseName" ref="courseName" type="text" className="validate" value={this.props.course.courseName}/>
                        <label for="courseName">Course name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col m6">
                        <input id="courseUrl" ref="courseUrl" type="url" className="validate" value={this.props.course.courseUrl}/>
                        <label for="courseUrl">Course homepage</label>
                    </div>
                    <div className="input-field col m3">
                        <input disabled id="lastAdded" type="text" class="validate" value={this.props.course.lastAdded}/>
                        <label for="lastAdded">Last added</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col m6">
                        <input id="fireUrl" ref="fireUrl" type="url" className="validate" value={this.props.course.fireUrl}/>
                        <label for="fireUrl">Fire url</label>
                    </div>
                    <div className="input-field col m3">
                        <input disabled id="timesAdded" type="text" class="validate" value={this.props.course.timesAdded}/>
                        <label for="timesAdded">Times added</label>
                    </div>
                    <a onClick={this.approve} className="btn green"><i className="material-icons">done</i></a>
                    <a onClick={this.delete} className="btn red"><i className="material-icons">clear</i></a>
                    <p>{this.state.response}</p>
                </div>
            </div>
        );
    }
});

export default CourseEditor;