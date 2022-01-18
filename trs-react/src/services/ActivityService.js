import http from "../common/HttpRequest";

class ActivityDataService {
    getAll() {
        return http.get("/activities");
    }

    get(id) {
        return http.get(`/activities/${id}`);
    }
}

export default new ActivityDataService();