import http from "../common/HttpRequest";

class EntriesDataService {
    getAll() {
        return http.get("/entries");
    }

    get(id) {
        return http.get(`/entries/${id}`);
    }

    create(data) {
        return http.post("/entries", data);
    }

    update(id, data) {
        return http.put(`/entries/${id}`, data);
    }

    delete(id) {
        return http.delete(`/entries/${id}`);
    }
}

export default new EntriesDataService();