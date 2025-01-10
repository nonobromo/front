import httpServices from "./httpService";

function getGuide(id) {
  return httpServices.get(`/guides/${id}`);
}

function getGuides() {
  return httpServices.get("/guides/all");
}

const guidesService = { getGuide, getGuides };

export default guidesService;
