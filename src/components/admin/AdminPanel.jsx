import React from "react";
import {Link, RouteHandler} from "react-router";
import AdminCourseList from "./AdminCourseList.jsx";
import CourseEditor from "./CourseEditor.jsx";

let AdminPanel = React.createClass({
    render() {
        return (
            <div className="section">
                <div className="container">
                    <Link to="admin" className="btn-floating btn-large waves-effect waves-light blue"><i className="material-icons">home</i></Link>
                    <Link to="create" className="btn-floating btn-large waves-effect waves-light teal"><i className="material-icons">add</i></Link>
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

export default AdminPanel;