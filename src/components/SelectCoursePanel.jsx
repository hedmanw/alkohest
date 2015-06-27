import React from "react";
import CourseList from "./CourseList.jsx";

let SelectCoursePanel = React.createClass({
    getInitialState() {
        return {
            data: []
        };
    },
    componentDidMount() {
        $.ajax({
            url: "http://localhost:8080/course",
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error("Cannot GET /course", status, err.toString());
            }
        });
    },
    render() {
        return (
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    <h1 className="header center orange-text">Sök efter kurser</h1>
                    <div className="row center">
                        <h5 className="header col s12 light">Leta reda på kurser och fäst (fest) dem på startsidan!</h5>
                        <p>Kontakta mig på irkken om en kurs saknas eller har fel information.</p>
                    </div>
                    <div className="row center">
                        <div className="input-field col s12 m6">
                            <input id="search-field" type="text" placeholder="Kurskod eller kursnamn"/>
                            <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">search</i></a>
                        </div>
                    </div>
                    <CourseList data={this.state.data}/>
                </div>
            </div>
        )
    }
});

export default SelectCoursePanel;