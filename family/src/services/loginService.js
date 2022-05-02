import http from "./httpService";

export function loginUser(email, password) {
  return http.post("/login", {
    email: email,
    password: password,
  });
}
