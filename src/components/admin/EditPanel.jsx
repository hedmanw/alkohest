import React from "react";
import CourseEditor from "./CourseEditor.jsx";
import CourseClient from "../../clients/CourseClient.js";

let EditPanel = React.createClass({
    getInitialState() {
        return {
            course: null
        };
    },

    componentWillMount() {
        let {courseID} = this.props.params;
        CourseClient.getById(courseID, (data) => {
            this.setState({course: data})
        }, () => {});
    },

    render() {
        if (this.state.course) {
            return (
                <div>
                    <h1 className="header purple-text">Ändra på gammal makapär</h1>
                    <CourseEditor course={this.state.course}/>
                </div>
            );
        }
        else {
            return(<p>Tomt.</p>);
        }
    }
});

export default EditPanel;