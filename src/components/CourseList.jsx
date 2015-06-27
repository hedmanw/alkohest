import React from "react";
import Card from "./Card.jsx";
import StorageClient from "../clients/StorageClient.jsx"

let CourseList = React.createClass({
    render() {
        let courses = this.props.data.map(item => {
            return (
                <CourseRow id={item.id} code={item.courseCode} homepage={item.courseUrl} fire={item.fireUrl}>{item.courseName}</CourseRow>
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
    getInitialState() {
        return {
            pinned: StorageClient.isPinned(this.props.id),
            token: null
        };
    },
    componentDidMount() {
        let token = StorageClient.subscribe(function() {
            this.setState({pinned: StorageClient.isPinned(this.props.id)});
        }.bind(this));
        this.setState({token: token});
    },
    componentWillUnmount() {
        if (this.state.token) {
            StorageClient.unsubscribe(this.state.token);
        }
    },
    handleClick() {
        StorageClient.setPinned(this.props.id)
    },
    render() {
        let fire;
        if (typeof this.props.fire !== 'undefined') {
            fire = <td><a href={this.props.fire}>Fire</a></td>;
        }
        else {
            fire = <td></td>
        }
        let pinButton;
        if (this.state.pinned) {
            pinButton = <a className="btn disabled"><i className="material-icons">done</i></a>
        }
        else {
            pinButton = <a onClick={this.handleClick} className="btn blue"><i className="material-icons">add</i></a>
        }

        return(
            <tr>
                <td>{this.props.code}</td>
                <td>{this.props.children}</td>
                <td><a href={this.props.homepage}>Hemsida</a></td>
                {fire}
                <td>{pinButton}</td>
            </tr>
        )
    }
});

export default CourseList;