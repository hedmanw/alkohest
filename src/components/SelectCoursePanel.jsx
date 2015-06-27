import React from "react";
//import {Link} from "react-router";
import Card from "./Card.jsx";

let SelectCoursePanel = React.createClass({
    render() {
        return (
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    <h1 className="header center orange-text">Sök efter kurser</h1>
                    <div className="row center">
                        <h5 className="header col s12 light">Leta reda på kurser och fäst (fest) dem på startsidan!</h5>
                    </div>
                    <div className="row center">
                        <div className="input-field col s12 m6">
                            <input placeholder="Kurskod eller kursnamn" id="search-field" type="text"/>
                            <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">search</i></a>
                        </div>
                    </div>
                    <div className="row">
                        <Card code="TDA357" homepage="www.google.com">Hej!</Card>
                        <Card code="TDA357" homepage="www.google.com" fire="asdfasdf">Hej!</Card>
                    </div>
                </div>
            </div>
        )
    }
});

export default SelectCoursePanel;