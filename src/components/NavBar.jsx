import React from "react";
import {Link, State} from "react-router";

let NavBar = React.createClass({
    render() {
        return (
        <nav className="grey darken-4" role="navigation">
            <div className="nav-wrapper container"><Link to="app" className="brand-logo navbar-brand">Alkohest</Link>
                <ul className="right hide-on-med-and-down">
                    <NavTab to="select">Alla kurser</NavTab>
                </ul>

                <ul id="nav-mobile" className="side-nav">
                    <NavTab to="select">Alla kurser</NavTab>
                </ul>
                <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
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