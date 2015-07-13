import React from "react";
import CourseEditor from "./CourseEditor.jsx";

let EditPanel = React.createClass({
    getInitialState() {
        let {courseID} = this.props.params;
        return {
            course: courseID
        };
    },

    render() {
        return (
            <div>
                <h1 className="header purple-text">Ändra på gammal makapär {this.state.course}</h1>
                <CourseEditor course={{}}/>
            </div>
        );
    }
});

export default EditPanel;