import React from "react";
import CourseList from "./CourseList.jsx";
import PinnedManagement from "./PinnedManagement.jsx";
import CourseClient from "../clients/CourseClient.jsx";

let SelectCoursePanel = React.createClass({
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
        return (
            <div>
                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                        <h1 className="header center blue-text">Sök efter kurser</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">Leta reda på kurser och fäst (fest) dem på startsidan!</h5>
                            <p>Kontakta mig på irkken om en kurs saknas eller har fel information.</p>
                        </div>
                    </div>
                </div>
                <PinnedManagement/>
                <div className="section">
                    <div className="container">
                        <div className="row center">
                            <div className="input-field col s12 m6 offset-m3">
                                <input id="search-field" type="text" placeholder="Kurskod eller kursnamn"/>
                                <a className="btn-floating btn-large waves-effect waves-light blue"><i className="material-icons">search</i></a>
                            </div>
                        </div>
                        <CourseList data={this.state.data}/>
                    </div>
                </div>
            </div>

        )
    }
});

export default SelectCoursePanel;