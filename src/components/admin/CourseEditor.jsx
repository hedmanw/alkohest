import React from "react";

let CourseEditor = React.createClass({
    render() {
        return (
            <div className="row">
                <div className="row">
                    <div className="input-field col m1">
                        <input disabled value="1" id="dbId" type="text" class="validate"/>
                        <label for="dbId">Database id</label>
                    </div>
                    <div className="input-field col m4">
                        <input id="courseCode" type="text" className="validate"/>
                        <label for="courseCode">Course code</label>
                    </div>
                    <div className="input-field col m7">
                        <input id="courseName" type="text" className="validate"/>
                        <label for="courseName">Course name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col m6">
                        <input id="courseUrl" type="url" className="validate"/>
                        <label for="courseUrl">Course homepage</label>
                    </div>
                    <div className="input-field col m3">
                        <input disabled value="asdfas" id="lastAccessed" type="text" class="validate"/>
                        <label for="lastAccessed">Last added</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col m6">
                        <input id="fireUrl" type="url" className="validate"/>
                        <label for="fireUrl">Fire url</label>
                    </div>
                    <div className="input-field col m3">
                        <input disabled value="asdfas" id="timesAdded" type="text" class="validate"/>
                        <label for="timesAdded">Times added</label>
                    </div>
                    <a onClick={this.handleClick} className="btn green"><i className="material-icons">done</i></a>
                </div>
            </div>
        );
    }
});

export default CourseEditor;