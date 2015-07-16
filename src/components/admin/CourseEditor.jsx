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
            CourseClient.deleteCourse(this.props.course.id, (data) => {
                this.setState({response: data})
            }, (err) => {
                this.setState({response: err})
            });
    },
    render() {
        let deleteButton;
        if (this.props.course.id) {
            deleteButton = <a onClick={this.delete} className="btn red">Släng</a>;
        }

        return (
            <div>
                <div className="row">
                    <div className="input-field col m2">
                        <input disabled id="dbId" type="text" className="validate" defaultValue={this.props.course.id}/>
                        <label className="active" htmlFor="dbId">ID</label>
                    </div>
                    <div className="input-field col m4">
                        <input id="courseCode" ref="courseCode" type="text" className="validate" defaultValue={this.props.course.courseCode}/>
                        <label className="active" htmlFor="courseCode">Course code</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col m6">
                        <input id="courseName" ref="courseName" type="text" className="validate" defaultValue={this.props.course.courseName}/>
                        <label className="active" htmlFor="courseName">Course name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col m6">
                        <input id="courseUrl" ref="courseUrl" type="url" className="validate" defaultValue={this.props.course.courseUrl}/>
                        <label className="active" htmlFor="courseUrl">Course homepage</label>
                    </div>
                    <a href={this.props.course.courseUrl} target="_blank" className="btn-floating btn-large purple"><i className="material-icons">arrow_forward</i></a>
                </div>
                <div className="row">
                    <div className="input-field col m6">
                        <input id="fireUrl" ref="fireUrl" type="url" className="validate" defaultValue={this.props.course.fireUrl}/>
                        <label className="active" htmlFor="fireUrl">Fire url</label>
                    </div>
                    <a href={this.props.course.fireUrl} target="_blank" className="btn-floating btn-large orange"><i className="material-icons">arrow_forward</i></a>
                </div>
                <div className="row">
                        <div className="col m6">
                        <a onClick={this.approve} className="btn green">Skapa</a>
                        {deleteButton}
                        <p>{this.state.response}</p>
                    </div>
                </div>
            </div>
        );
    }
});

export default CourseEditor;