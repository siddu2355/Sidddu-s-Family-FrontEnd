import http from "./httpService";

export function getMembers() {
  return http.get("/family");
}

export function getMember(memberId) {
  return http.get("/family/" + memberId);
}

export function deleteMember(memberId) {
  return http.delete("/family/" + memberId);
}
