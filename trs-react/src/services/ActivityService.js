import http from "../common/HttpRequest";

class ActivityDataService {
    getAll() {
        return http.get("/activities");
    }

    get(id) {
        return http.get(`/activities/${id}`);
    }

    create(data) {
        return http.post("/activities", data);
    }

    update(id, data) {
        return http.put(`/activities/${id}`, data);
    }

    delete(id) {
        return http.delete(`/activities/${id}`);
    }
}

export default new ActivityDataService();