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
    handleClick() {
        StorageClient.swapPinned();
    },
    render() {
        let firstCard = <TinyCard offset="offset-l1">{this.props.data[0]}</TinyCard>;
        let swapButton;
        let secondCard;

        if (this.props.data.length == 2) {
            swapButton = (
            <div className="col s12 m2">
                <div className="aligner">
                    <a onClick={this.handleClick} className="btn-floating btn-large waves-effect waves-light red aligned-item" id="swap-button"><i className="material-icons">swap_horiz</i></a>
                </div>
            </div>
            );
            secondCard = <TinyCard>{this.props.data[1]}</TinyCard>;
        }

        return (
            <div className="section grey">
                <div className="container">
                    <div className="row">
                        <div className="col s12 offset-l1">
                            <h5 className="white-text">På din <Link to="app" className="dotted-link">startsida</Link> nu:</h5>
                        </div>
                    </div>
                    <div className="row">
                        {firstCard}
                        {swapButton}
                        {secondCard}
                    </div>
                </div>
            </div>
        );
    }
});

let TinyCard = React.createClass({
    handleClick() {
        console.log("Remove " + this.props.children.id)
    },
    render() {
        let colClasses = "col s12 m4";
        if (this.props.offset) {
            colClasses = colClasses + " " + this.props.offset;
        }

        let urlIcon;
        if (this.props.children.courseUrl) {
            urlIcon = <i className="material-icons">school</i>;
        }

        let fireIcon;
        if (this.props.children.fireUrl) {
            fireIcon = <i className="material-icons">whatshot</i>;
        }

        return(
            <div className={colClasses}>
                <div className="card light-blue white-text">
                    <div className="card-content white-text">
                        <a onClick={this.handleClick} className="btn-floating btn-small waves-effect waves-light white float-right"><i className="material-icons blue-text">close</i></a>
                        <span className="card-title">{this.props.children.courseCode}</span>
                        <p>{this.props.children.courseName}</p>
                        <span>{urlIcon} {fireIcon}</span>
                    </div>
                </div>
            </div>
        )
    }
});

export default PinnedManagement;