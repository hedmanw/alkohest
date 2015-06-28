import React from "react";
import StorageClient from "../clients/StorageClient.jsx";
import CourseClient from "../clients/CourseClient.jsx";

let PinnedManagement = React.createClass({
    getInitialState() {
        return {
            courses: StorageClient.getPinned(),
            data: []
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
        let firstCard = <TinyCard code={this.props.data[0].courseCode} offset="offset-l1">{this.props.data[0].courseName}</TinyCard>;
        let swapButton;
        let secondCard;

        if (this.props.data.length == 2) {
            swapButton = (<div className="col s12 m2">
                <div className="aligner">
                    <a className="btn-floating btn-large waves-effect waves-light red aligned-item" id="swap-button"><i className="material-icons">swap_horiz</i></a>
                </div>
            </div>);
            secondCard = <TinyCard code={this.props.data[1].courseCode}>{this.props.data[1].courseName}</TinyCard>;
        }

        return (
            <div className="section grey">
                <div className="container">
                    <div className="row">
                        <div className="col s12 offset-l1">
                            <h5 className="white-text">På din startsida nu:</h5>
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
    render() {
        let colClasses = "col s12 m4";
        if (this.props.offset) {
            colClasses = colClasses + " " + this.props.offset;
        }

        return(
            <div className={colClasses}>
                <div className="card light-blue white-text">
                    <div className="card-content white-text">
                        <span className="card-title">{this.props.code}</span>
                        <p>{this.props.children}</p>
                    </div>
                </div>
            </div>
        )
    }
});

export default PinnedManagement;