import React from "react";
import {Link} from "react-router";
import CourseClient from "../../clients/CourseClient.js";

let CourseEditor = React.createClass({
    getInitialState() {
        return {
            response: null,
            courseCode: this.props.course.courseCode,
            courseName: this.props.course.courseName,
            courseUrl: this.props.course.courseUrl,
            fireUrl: this.props.course.fireUrl
        };
    },
    approve() {
        let data = {
            courseCode: this.refs.courseCode.getDOMNode().value,
            courseName: this.refs.courseName.getDOMNode().value,
            courseUrl: this.refs.courseUrl.getDOMNode().value,
            fireUrl: this.refs.fireUrl.getDOMNode().value
        };
        // TODO: Create the callbacks htmlFor all CourseClient calls
        // The callback should really be registered one level up so this component can be redrawn/redirected/whatever accordingly?
        // check out react router if a "redirect" is in order.
        if (this.props.course.id) {
            CourseClient.editCourse(this.props.course.id, data, (data) => {
                this.setState({response: data})
            }, (err) => {
                this.setState({response: err})
            });
        }
        else {
            CourseClient.create(data, (data) => {
                this.setState({response: data})
            }, (err) => {
                this.setState({response: err})
            });
        }
    },
    delete() {
        if (this.props.course.id) {
            CourseClient.deleteCourse(this.props.course.id);
        }
        else {
            // TODO: Link to back
        }
    },
    changeCode(event) {
        this.setState({courseCode: event.target.value});
    },
    render() {
        return (
            <div>
                <div className="row">
                    <div className="input-field col m2">
                        <input disabled id="dbId" type="text" className="validate" value={this.props.course.id}/>
                        <label className="active" htmlFor="dbId">ID</label>
                    </div>
                    <div className="input-field col m4">
                        <input id="courseCode" ref="courseCode" type="text" className="validate" value={this.state.courseCode} onChange={this.changeCode}/>
                        <label className="active" htmlFor="courseCode">Course code</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col m6">
                        <input id="courseName" ref="courseName" type="text" className="validate" value={this.state.courseName}/>
                        <label className="active" htmlFor="courseName">Course name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col m6">
                        <input id="courseUrl" ref="courseUrl" type="url" className="validate" value={this.state.courseUrl}/>
                        <label className="active" htmlFor="courseUrl">Course homepage</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col m6">
                        <input id="fireUrl" ref="fireUrl" type="url" className="validate" value={this.state.fireUrl}/>
                        <label className="active" htmlFor="fireUrl">Fire url</label>
                    </div>
                </div>
                <div className="row">
                        <div className="col m6">
                        <a onClick={this.approve} className="btn green">Skapa</a>
                        <a onClick={this.delete} className="btn red">Släng</a>
                        <p>{this.state.response}</p>
                    </div>
                </div>
            </div>
        );
    }
});

export default CourseEditor;