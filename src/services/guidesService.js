import httpServices from "./httpService";

export function getGuide(id) {
  return httpServices.get(`/guides/${id}`);
}

export function getGuides() {
  return httpServices.get("/guides/all");
}

