import http from "./httpService";
import config from "../config/config.json";

export function registerUser(user) {
  return http.post(config.apiEndpoint + "/register", {
    email: user.email,
    name: user.name,
    password: user.password,
  });
}
