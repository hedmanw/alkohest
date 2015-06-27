class CourseData {
    getAll() {
        return [
            {id: "1", courseCode: "TDA357", courseName: "Databases", courseUrl: "http://www.cse.chalmers.se/edu/course/TDA357/VT2015/", fireUrl: "https://xdat09.ce.chalmers.se/databases/login"},
            {id: "2", courseCode: "TDA517", courseName: "Kommunikation engelska och ingenjörskompetens", courseUrl: "https://pingpong.chalmers.se/courseId/4887/content.do?id=2168510"},
            {id: "3", courseCode: "DATX02", courseName: "Kandidatarbete D&IT", courseUrl: "https://pingpong.chalmers.se/launchCourse.do?id=4424"},
            {id: "4", courseCode: "MVE045", courseName: "Matematisk analys", courseUrl: "https://www.youtube.com/watch?v=xrIjfIjssLE"}
        ]
    }
    getById(id) {
        return this.getAll().filter(item => item.id === id);
    }
}

export default new CourseData();