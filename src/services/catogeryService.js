import http from "../services/httpService";

export function getCatogeries() {
  return http.get("/catogeries");
}
