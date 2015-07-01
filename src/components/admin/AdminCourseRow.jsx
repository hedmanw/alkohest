import React from "react";

let AdminCourseRow = React.createClass({
    getInitialState() {
        return {
            editing: false
        };
    },
    handleClick() {
        this.setState({editing: !this.state.editing})
    },
    render() {
        let fire;
        if (typeof this.props.fire !== 'undefined') {
            fire = <a href={this.props.fire} title="Fire"><i className="material-icons">file_upload</i></a>;
        }

        let editButton;
        if (this.state.editing) {
            editButton = <a onClick={this.handleClick} className="btn green"><i className="material-icons">done</i></a>
        }
        else {
            editButton = <a onClick={this.handleClick} className="btn blue"><i className="material-icons">edit</i></a>
        }

        return(
            <tr>
                <td>{this.props.code}</td>
                <td>{this.props.children}</td>
                <td><a href={this.props.homepage} title="Hemsida"><i className="material-icons">home</i></a>
                    {fire}
                </td>
                <td></td>
                <td></td>
                <td>{editButton}</td>
            </tr>
        )
    }
});

export default AdminCourseRow;