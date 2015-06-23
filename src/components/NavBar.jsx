import React from "react";
import {Link, State} from "react-router";

let NavBar = React.createClass({
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="app" className="navbar-brand">Alkohest</Link>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <NavTab to="app">Home</NavTab>
                            <NavTab to="select">Select courses</NavTab>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

var NavTab = React.createClass({
    mixins: [ State ],
    render: function() {
        let isActive = this.context.router.isActive(this.props.to, this.props.params, this.props.query);
        let className = isActive ? 'active' : '';
        return <li className={className}><Link {...this.props} /></li>;
    }
});

export default NavBar;