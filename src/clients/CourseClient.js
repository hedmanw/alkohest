
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
            url: "http://localhost:8080/" + urlExtension,
            dataType: 'json',
            cache: false,
            success: function(data) {
                resolve(data);
            },
            error: function(xhr, status, err) {
                console.error("Cannot GET /" + urlExtension, status, err.toString());
                reject()
            }
        });
    }
}

export default new CourseClient();