import React from "react";
import CourseEditor from "./CourseEditor.jsx";
import CourseClient from "../../clients/CourseClient.js";

let EditPanel = React.createClass({
    getInitialState() {
        return {
            course: {}
        };
    },

    componentWillMount() {
        let {courseID} = this.props.params;
        CourseClient.getById(courseID, (data) => {
            this.setState({course: data})
        }, () => {});
    },

    render() {
        return (
            <div>
                <h1 className="header purple-text">Ändra på gammal makapär</h1>
                <CourseEditor course={this.state.course}/>
            </div>
        );
    }
});

export default EditPanel;