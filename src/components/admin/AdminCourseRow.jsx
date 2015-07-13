import React from "react";
import {Link} from "react-router";

let AdminCourseRow = React.createClass({
    render() {
        let fire;
        if (this.props.fire) {
            fire = <a href={this.props.fire} title="Fire"><i className="material-icons">file_upload</i></a>;
        }

        return(
            <tr>
                <td>{this.props.code}</td>
                <td>{this.props.children}</td>
                <td><a href={this.props.homepage} title="Hemsida"><i className="material-icons">home</i></a>
                    {fire}
                </td>
                <td><Link to="view" params={{courseID: this.props.id}} className="btn blue"><i className="material-icons">edit</i></Link></td>
            </tr>
        )
    }
});

export default AdminCourseRow;