import React from "react";
import {Link} from "react-router";
import StorageClient from "../clients/StorageClient.js";
import CourseClient from "../clients/CourseClient.js";

let PinnedManagement = React.createClass({
    getInitialState() {
        return {
            courses: StorageClient.getPinned(),
            data: [],
            token: null
        };
    },
    updateData() {
        CourseClient.getByIds(this.state.courses,
            function(data) {
                this.setState({data: data});
            }.bind(this),
            function() {
                // Go cry.
            }
        );
    },
    componentDidMount() {
        this.updateData();
        let token = StorageClient.subscribe(function() {
            this.setState({courses: StorageClient.getPinned()});
            this.updateData();
        }.bind(this));
        this.setState({token: token});
    },
    componentWillUnmount() {
        if (this.state.token) {
            StorageClient.unsubscribe(this.state.token);
        }
    },
    render() {
        if (this.state.data.length == 0) {
            return(<div/>);
        }
        else {
            return(
                <CardDisplay data={this.state.data}/>
            );
        }
    }
});

let CardDisplay = React.createClass({
    render() {
        let dataset = {
            courses: this.props.data
        };

        return (
            <div className="section grey">
                <div className="container">
                    <div className="row">
                        <div className="col s12 offset-l1">
                            <h5 className="white-text">På din <Link to="app" className="dotted-link">startsida</Link> nu:</h5>
                        </div>
                    </div>
                    <div className="row">
                        <DraggableList data={dataset}/>
                    </div>
                </div>
            </div>
        );
    }
});

let TinyCard = React.createClass({
    handleClick() {
        console.log("Remove " + this.props.children.id);
        StorageClient.removePinned(this.props.children.id)
    },
    render() {
        let urlIcon;
        if (this.props.children.courseUrl) {
            urlIcon = <i className="material-icons">school</i>;
        }

        let fireIcon;
        if (this.props.children.fireUrl) {
            fireIcon = <i className="material-icons">whatshot</i>;
        }

        return(
            <div className="card light-blue white-text">
                <div className="card-content white-text">
                    <a onClick={this.handleClick} className="btn-floating btn-small waves-effect waves-light white float-right delete-button"><i className="material-icons blue-text">close</i></a>
                    <span className="card-title">{this.props.children.courseCode}</span>
                    <p>{this.props.children.courseName}</p>
                    <span>{urlIcon} {fireIcon}</span>
                </div>
            </div>
        )
    }
});

var DraggableList = React.createClass({
    getInitialState() {
        return {
            data: this.props.data
        };
    },
    updateState(courses, dragging) {
        var data = this.state.data;
        data.courses = courses;
        data.dragging = dragging;
        this.setState({data: data});
    },
    dragEnd() {
        this.updateState(this.state.data.courses, undefined);
    },
    dragStart(e) {
        this.dragged = Number(e.currentTarget.dataset.id);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData("text/html", null)
    },
    dragOver(e) {
        e.preventDefault();
        var over = e.currentTarget;
        var dragging = this.state.data.dragging;
        var from = isFinite(dragging) ? dragging : this.dragged;
        var to = Number(over.dataset.id);
        if((e.clientY - over.offsetTop) > (over.offsetHeight / 2)) to++;
        if(from < to) to--;

        var items = this.state.data.courses;
        items.splice(to, 0, items.splice(from,1)[0]);
        this.updateState(items, to);
    },
    render() {
        var listItems = this.state.data.courses.map((item, index) => {
            var dragging = (index == this.state.data.dragging) ? "dragging" : "";
            return (
                <li data-id={index}
                    className={dragging}
                    key={index}
                    draggable="true"
                    onDragEnd={this.dragEnd}
                    onDragOver={this.dragOver}
                    onDragStart={this.dragStart}
                    className="col s12 m4">
                    <TinyCard>{item}</TinyCard>
                </li>
            );
        }, this);

        let appState = <pre>App State: <br/><br/>{JSON.stringify(this.state,0,2)}</pre>;
        return (
            <ul>{listItems}</ul>
        )
    }
});

export default PinnedManagement;