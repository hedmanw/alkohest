import React from "react";
import {Link} from "react-router";
import StorageClient from "../clients/StorageClient.js";
import CourseClient from "../clients/CourseClient.js";

let PinnedManagement = React.createClass({
    getInitialState() {
        return {
            data: [],
            token: null
        };
    },
    updateData() {
        CourseClient.getByIds(StorageClient.getPinned(),
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
                <div className="section grey">
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <h5 className="white-text">På din <Link to="app" className="dotted-link">startsida</Link> nu:</h5>
                                <p className="white-text">Använd drag and drop för att ändra ordning på kurserna.</p>
                            </div>
                        </div>
                        <div className="row">
                            <DraggableList data={this.state.data}/>
                        </div>
                    </div>
                </div>
            );
        }
    }
});

let TinyCard = React.createClass({
    handleClick() {
        StorageClient.removePinned(this.props.children.id);
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

let DraggableList = React.createClass({
    getInitialState() {
        return {};
    },
    dragEnd() {
        this.setState({dragging: undefined});
    },
    dragStart(e) {
        this.dragged = Number(e.currentTarget.dataset.id);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData("text/html", null)
    },
    dragOver(e) {
        e.preventDefault();
        let over = e.currentTarget;
        let dragging = this.state.dragging;
        let from = isFinite(dragging) ? dragging : this.dragged;
        let to = Number(over.dataset.id);

        //console.log("X=" + e.clientX + " overOffLeft=" + over.offsetLeft + " offsetWidth=" + over.offsetWidth + " fr/to=" + from + "/" + to);
        if ((e.clientX - over.offsetLeft) > (over.offsetWidth / 2)) {
            to++;
        }
        if (from < to) {
            to--;
        }

        let items = this.props.data;
        items.splice(to, 0, items.splice(from, 1)[0]);

        this.setState({dragging: to});
        StorageClient.saveState(this.props.data.map(item => item.id));
    },
    render() {
        let listItems = this.props.data.map((item, index) => {
            let dragging = (index == this.state.dragging) ? "dragging" : "";
            return (
                <li data-id={index}
                    className={dragging}
                    key={index}
                    draggable="true"
                    onDragEnd={this.dragEnd}
                    onDragOver={this.dragOver}
                    onDragStart={this.dragStart}
                    className="col s12 m3">
                    <TinyCard>{item}</TinyCard>
                </li>
            );
        }, this);

        let appState = <pre>Component State: <br/><br/>{JSON.stringify(this.props.data,0,2)}</pre>;
        return (
            <ul>{listItems}</ul>
        )
    }
});

export default PinnedManagement;