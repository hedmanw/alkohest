import React from "react";
import Card from "./Card.jsx";


let CourseList = React.createClass({
    render() {
        let courses = this.props.data.map(item => {
            return (
                <CourseRow code={item.courseCode} homepage={item.courseUrl} fire={item.fireUrl}>{item.courseName}</CourseRow>
            )
        });
        return(
            <table className="bordered">
                <thead>
                    <tr>
                        <th data-field="id">Kurskod</th>
                        <th data-field="name">Kursnamn</th>
                        <th data-field="homepage">Hemsida</th>
                        <th data-field="fire">Fire</th>
                        <th data-field="pinned">Startsida</th>
                    </tr>
                </thead>
                <tbody>
                    {courses}
                </tbody>
            </table>
        )
    }
});

let CourseRow = React.createClass({
    render() {
        let fire;
        if (typeof this.props.fire !== 'undefined') {
            fire = <td><a href={this.props.fire}>Fire</a></td>;
        }
        else {
            fire = <td>N/A</td>
        }
        return(
            <tr>
                <td>{this.props.code}</td>
                <td>{this.props.children}</td>
                <td><a href={this.props.homepage}>Hemsida</a></td>
                {fire}
                <th><a href="#"><i className="material-icons">send</i></a></th>
            </tr>
        )
    }
});

export default CourseList;