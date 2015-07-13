import React from "react";
import {Link} from "react-router";
import CourseEditor from "./CourseEditor.jsx"

let CreatePanel = React.createClass({
    render() {
        return(
            <div>
                <h1 className="header purple-text">Skapa ny makapär</h1>
                <CourseEditor course={{}}/>
            </div>
        );
    }
});

export default CreatePanel;