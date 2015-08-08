import React from "react";
import StorageClient from "../clients/StorageClient.js";

let CourseList = React.createClass({
    render() {
        let courses = this.props.data.map(item => {
            return (
                <CourseRow key={item.id} id={item.id} code={item.courseCode} homepage={item.courseUrl} fire={item.fireUrl}>{item.courseName}</CourseRow>
            )
        });
        return(
            <table className="bordered">
                <thead>
                    <tr>
                        <th data-field="id">Kurskod</th>
                        <th data-field="name">Kursnamn</th>
                        <th data-field="links">Länkar</th>
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
        StorageClient.addPinned(this.props.id)
    },
    render() {
        let fire;
        if (this.props.fire) {
            fire = <a href={this.props.fire} title="Fire"><i className="material-icons">file_upload</i></a>;
        }
        let pinButton;
        if (this.state.pinned) {
            pinButton = <a className="btn disabled-green"><i className="material-icons">done</i></a>
        }
        else {
            pinButton = <a onClick={this.handleClick} className="btn blue"><i className="material-icons">add</i></a>
        }

        return(
            <tr>
                <td>{this.props.code}</td>
                <td>{this.props.children}</td>
                <td><a href={this.props.homepage} title="Hemsida"><i className="material-icons">home</i></a>
                    {fire}
                </td>
                <td>{pinButton}</td>
            </tr>
        )
    }
});

export default CourseList;