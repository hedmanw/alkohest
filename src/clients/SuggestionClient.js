import config from "./config.json";

let HEST_API = config.apiHost;
let ADMIN_API = HEST_API + "admin/";

class SuggestionClient {
    // TODO: move all HTTP requests into a common class
    getAll(resolve, reject) {
        this.get("/admin/suggestion", resolve, reject);
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
        this.postWithAuth("suggestion", course, resolve, reject);
    }

    deleteSuggestion(courseId, resolve, reject) {
        this.deleteWithAuth("/admin/suggestion" + courseId, resolve, reject);
    }

    postWithAuth(urlExtension, body, resolve, reject) {
        $.ajax({
            url: ADMIN_API + urlExtension,
            type: 'post',
            data: body,
            headers: {
                "x-api-key": window.localStorage.getItem('api-key')
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
                "x-api-key": window.localStorage.getItem('api-key')
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

export default new SuggestionClient();