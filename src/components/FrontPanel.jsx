import React from "react";
import {Link} from "react-router";
import Card from "./Card.jsx";

let FrontPanel = React.createClass({
    render() {
        return (
            <div className="homepage-billboard">
                <div className="section">
                    <div className="container">
                        <div className="row center">
                            <div className="header white-text homepage-title">supa?</div>
                        </div>
                    </div>
                </div>
                <div className="section courses-section no-pad-bot">
                    <div className="container">
                        <div className="row">
                            <Card code="TDA357" homepage="asdf" fire="asdf">Databases</Card>
                        </div>
                        <Link to="select" className="dotted-link">Välj kurser »</Link>
                    </div>
                </div>
            </div>
        )
    }
});

export default FrontPanel;