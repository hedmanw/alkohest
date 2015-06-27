import React from "react";
import Card from "./Card.jsx";


let CourseList = React.createClass({
    render() {
        let courses = this.props.data.map(item => {
            return (
                <Card code={item.courseCode} homepage={item.courseUrl} fire={item.fireUrl}>{item.courseName}</Card>
            )
        });
        return(
            <div className="row">
                {courses}
            </div>
        )
    }
});

export default CourseList;