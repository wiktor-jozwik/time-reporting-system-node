import http from "../common/HttpRequest";

class UserDataService {
    getLogged() {
        return http.get("/users/logged");
    }

    log(id) {
        return http.get(`/users/login/${id}`);
    }
}

export default new UserDataService();