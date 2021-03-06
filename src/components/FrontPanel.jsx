import React from "react";
import {Link} from "react-router";
import Card from "./Card.jsx";
import CourseClient from "../clients/CourseClient.js";
import StorageClient from "../clients/StorageClient.js";

let FrontPanel = React.createClass({
    getInitialState() {
        return {
            data: [],
            courses: StorageClient.getPinned()
        };
    },
    componentDidMount() {
        CourseClient.getByIds(this.state.courses,
            function(data) {
                this.setState({data: data});
            }.bind(this),
            function() {
                // Go cry.
            }
        );
    },
    render() {
        let courseCount = this.state.data.length;
        let courseCards = this.state.data.map(item => {
            return <Card key={item.id} code={item.courseCode} homepage={item.courseUrl} fire={item.fireUrl} count={courseCount}>{item.courseName}</Card>
        });
        return (
            <div className="homepage-billboard">
                <div className="section">
                    <div className="container">
                        <div className="row center">
                            <div className="header white-text homepage-title">plugga?</div>
                        </div>
                    </div>
                </div>
                <div className="section footer no-pad-bot">
                    <div className="container">
                        <div className="row">
                            {courseCards}
                        </div>
                        <Link to="select" className="dotted-link">Välj kurser »</Link>
                    </div>
                </div>
            </div>
        )
    }
});

export default FrontPanel;