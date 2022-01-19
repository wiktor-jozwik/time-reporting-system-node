import http from "../common/HttpRequest";

class UserDataService {
    getAll() {
        return http.get("/users");
    }

    log(id) {
        return http.post(`/users/login/${id}`);
    }
}

export default new UserDataService();