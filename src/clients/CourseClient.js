let HEST_API = "http://localhost:8080/";

class CourseClient {

    getAll(resolve, reject) {
        this.get("course", resolve, reject);
    }

    getById(id, resolve, reject) {
        this.get("course/" + id, resolve, reject);
    }

    getByIds(ids, resolve, reject) {
        this.get("course?ids=" + JSON.stringify(ids), resolve, reject)
    }

    get(urlExtension, resolve, reject) {
        $.ajax({
            url: HEST_API + urlExtension,
            dataType: 'json',
            cache: true,
            success: function(data) {
                resolve(data);
            },
            error: function(xhr, status, err) {
                console.error("Cannot GET /" + urlExtension, status, err.toString());
                reject()
            }
        });
    }

    create(course) {
        this.postWithAuth("course", course, null, null);
    }

    editCourse(course) {
        this.postWithAuth("course/" + course.id, null, null);
    }

    deleteCourse(course) {
        this.deleteWithAuth("course/" + course.id, null, null);
    }

    postWithAuth(urlExtension, body, resolve, reject) {
        $.ajax({
            url: HEST_API + urlExtension,
            type: 'post',
            data: body,
            headers: {
                "x-api-key": 'hestnyckel'
            },
            success: function (data) {
                resolve(data)
            },
            error: function(xhr, status, err) {
                console.error("Cannot POST /" + urlExtension, status, err.toString());
                reject(status);
            }
        });
    }

    deleteWithAuth(urlExtension, resolve, reject) {
        $.ajax({
            url: HEST_API + urlExtension,
            type: 'delete',
            headers: {
                "x-api-key": 'hestnyckel'
            },
            success: function (data) {
                resolve(data)
            },
            error: function(xhr, status, err) {
                console.error("Could not DELETE /" + urlExtension, status, err.toString());
                reject(status);
            }
        });
    }
}

export default new CourseClient();