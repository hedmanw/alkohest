import React from "react";
import {Link} from "react-router";
import AdminCourseList from "./AdminCourseList.jsx";
import CourseEditor from "./CourseEditor.jsx";

let AdminPanel = React.createClass({
    render() {
        return (
            <div>
                <div className="section" id="index-banner">
                    <div className="container">
                        <h1 className="header purple-text">Administrera mera...</h1>
                        <Link to="create" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></Link>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <AdminCourseList/>
                    </div>
                </div>
            </div>
        );
    }
});

export default AdminPanel;