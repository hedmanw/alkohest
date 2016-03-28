import React from "react";
import CourseClient from "../../clients/CourseClient.js";
import AdminSuggestionRow from "./AdminSuggestionRow.jsx";

let AdminSuggestionList = React.createClass({
    getInitialState() {
        return {
            data: []
        };
    },
    componentDidMount() {
        SuggestionsClient.getAll(
            function(data) {
                this.setState({data: data});
            }.bind(this),
            function() {
                // Go cry.
            }
        )
    },
    render() {
        let suggestions = this.state.data.map(item => {
            return (
                //TODO: Needs to send the correct parameters into AdminSuggestionRow
                <AdminSuggestionRow key={item.id} id={item.id} code={item.courseCode} homepage={item.courseUrl} fire={item.fireUrl}>{item.courseName}</AdminSuggestionRow>
            )
        });
        return(
            <div>

                <table className="striped">
                    <thead>
                    <tr>
                        <th data-field="id">Id</th>
                        <th data-field="suggestedurl">Url</th>
                        <th data-field="suggestedfire">Fire</th>
                        <th data-field="suggestionip">IP</th>
                        <th data-field="manage">Administrera</th>
                    </tr>
                    </thead>
                    <tbody>
                    {suggestions}
                    </tbody>
                </table>
            </div>
        )
    }
});

export default AdminSuggestionList;