import React from "react";
import CourseClient from "../../clients/CourseClient.js";
import AdminCourseRow from "./AdminCourseRow.jsx";

let AdminCourseList = React.createClass({
    getInitialState() {
        return {
            data: []
        };
    },
    componentDidMount() {
        CourseClient.getAll(
            function(data) {
                this.setState({data: data});
            }.bind(this),
            function() {
                // Go cry.
            }
        )
    },
    render() {
        let courses = this.state.data.map(item => {
            return (
                <AdminCourseRow key={item.id} id={item.id} code={item.courseCode} homepage={item.courseUrl} fire={item.fireUrl}>{item.courseName}</AdminCourseRow>
            )
        });
        return(
            <table className="striped">
                <thead>
                    <tr>
                        <th data-field="id">Kurskod</th>
                        <th data-field="name">Kursnamn</th>
                        <th data-field="links">Länkar</th>
                        <th data-field="timesadded"># Tillagd</th>
                        <th data-field="lastadded">Senast tillagd</th>
                        <th data-field="manage">Administrera</th>
                    </tr>
                </thead>
                <tbody>
                    {courses}
                </tbody>
            </table>
        )
    }
});

export default AdminCourseList;