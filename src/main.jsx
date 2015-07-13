import React from "react";
import Router from "react-router";
import SelectCoursePanel from "./components/SelectCoursePanel.jsx";
import FrontPanel from "./components/FrontPanel.jsx";
import AdminPanel from "./components/admin/AdminPanel.jsx";
import AdminCourseList from "./components/admin/AdminCourseList.jsx";
import EditPanel from "./components/admin/EditPanel.jsx";
import CreatePanel from "./components/admin/CreatePanel.jsx";
import NavBar from "./components/NavBar.jsx";

let DefaultRoute = Router.DefaultRoute;
let RouteHandler = Router.RouteHandler;
let Route = Router.Route;

let App = React.createClass({
    render() {
        return (
            <div>
                <NavBar/>
                <RouteHandler/>
            </div>

        );
    }
});

let routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={FrontPanel}/>
        <Route name="select" path="select" handler={SelectCoursePanel} title="Alla kurser" />
        <Route name="admin" path="admin" handler={AdminPanel} title="Administrera">
            <DefaultRoute handler={AdminCourseList}/>
            <Route name="create" path="create" handler={CreatePanel}/>
            <Route name="view" path="view/:courseID" handler={EditPanel}/>
        </Route>
    </Route>
);


Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});