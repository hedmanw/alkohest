import React from "react";
import {Link} from "react-router";
import CourseEditor from "./CourseEditor.jsx"

let CreatePanel = React.createClass({
    render() {
        return(
            <div className="section grey lighten-3">
                <div className="container">
                    <Link to="admin" className="btn-floating btn-large purple"><i className="material-icons">arrow_back</i></Link>
                    <h1 className="header purple-text">Skapa ny makapär</h1>
                    <CourseEditor course={{}}/>
                </div>
            </div>
        );
    }
});

export default CreatePanel;