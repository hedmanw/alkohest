import React from "react";
import CourseList from "./CourseList.jsx";
import PinnedManagement from "./PinnedManagement.jsx";
import CourseClient from "../clients/CourseClient.js";

let SelectCoursePanel = React.createClass({
    getInitialState() {
        return {
            data: [],
            displayData: [],
            searchText: ''
        };
    },
    componentDidMount() {
        CourseClient.getAll(
            function(data) {
                this.setState({data: data, displayData: data});
            }.bind(this),
            function() {
                // Go cry.
            }
        )

    },
    textChange(e) {
        this.setState({searchText: e.target.value});
        if (e.target.value.length == 0) {
            this.setState({displayData: this.state.data});
        }
        else {
            this.updateSearchResults();
        }
    },
    handleSubmit(e) {
        e.preventDefault();
        this.updateSearchResults();
    },
    updateSearchResults() {
        let searchString = this.state.searchText.toLowerCase();
        let newData = this.state.data.filter(item => (item.courseCode.toLowerCase().includes(searchString) || item.courseName.toLowerCase().includes(searchString)));
        this.setState({displayData: newData});
    },
    render() {
        return (
            <div>
                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                        <h1 className="header center blue-text">Sök efter kurser</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">Leta reda på kurser och fäst (fest) dem på startsidan!</h5>
                            <p>Saknas det en kurs eller är nånting felaktigt? Kontakta mig på irkken!</p>
                        </div>
                    </div>
                </div>
                <PinnedManagement/>
                <div className="section">
                    <div className="container">
                        <div className="row center">
                            <div className="input-field col s12 m6 offset-m3">
                                <form onSubmit={this.handleSubmit}>
                                    <input onChange={this.textChange} value={this.state.searchText} id="search-field" type="text" placeholder="Kurskod eller kursnamn"/>
                                    <button className="btn-floating btn-large waves-effect waves-light blue"><i className="material-icons">search</i></button>
                                </form>
                            </div>
                        </div>
                        <CourseList data={this.state.displayData}/>
                    </div>
                </div>
            </div>

        )
    }
});

export default SelectCoursePanel;