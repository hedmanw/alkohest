import React from "react";
import Router from "react-router";
import SelectCoursePanel from "./components/SelectCoursePanel.jsx";
import FrontPanel from "./components/FrontPanel.jsx";
import NavBar from "./components/NavBar.jsx";

import $ from "jquery";
window.$ = window.jQuery = $;
import "bootstrap";

let DefaultRoute = Router.DefaultRoute;
let RouteHandler = Router.RouteHandler;
let Route = Router.Route;

let App = React.createClass({
    render() {
        return (
            <div>
                <NavBar/>
                {/* this is the important part */}
                <RouteHandler/>
            </div>
        );
    }
});

let routes = (
    <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={FrontPanel}/>
    <Route name="select" path="select" handler={SelectCoursePanel} title="Select courses" />

    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});