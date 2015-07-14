import config from "./config.json";

let HEST_API = config.apiHost;
let ADMIN_API = HEST_API + "admin/";

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
                console.error("Cannot GET /" + urlExtension, status, xhr.responseJSON);
                reject()
            }
        });
    }

    create(course, resolve, reject) {
        this.postWithAuth("course", course, resolve, reject);
    }

    editCourse(courseId, data, resolve, reject) {
        this.postWithAuth("course/" + courseId, data, resolve, reject);
    }

    deleteCourse(courseId, resolve, reject) {
        this.deleteWithAuth("course/" + courseId, resolve, reject);
    }

    postWithAuth(urlExtension, body, resolve, reject) {
        $.ajax({
            url: ADMIN_API + urlExtension,
            type: 'post',
            data: body,
            headers: {
                "x-api-key": 'hestnyckel'
            },
            success: function (data) {
                resolve(data)
            },
            error: function(xhr, status, err) {
                console.error("Cannot POST /" + urlExtension, status, xhr.responseJSON);
                reject(xhr.responseJSON);
            }
        });
    }

    deleteWithAuth(urlExtension, resolve, reject) {
        $.ajax({
            url: ADMIN_API + urlExtension,
            type: 'delete',
            headers: {
                "x-api-key": 'hestnyckel'
            },
            success: function (data) {
                resolve(data)
            },
            error: function(xhr, status, err) {
                console.error("Could not DELETE /" + urlExtension, status, xhr.responseJSON);
                reject(xhr.responseJSON);
            }
        });
    }
}

export default new CourseClient();