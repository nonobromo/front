import httpServices from "./httpService";

export function deleteTask(id) {
  return httpServices.delete(`/tasks/${id}`);
}

export function editTask(id) {
  return httpServices.put(`/tasks/${id}`);
}

export function getTask(id) {
  return httpServices.get(`/tasks/${id}`);
}

export function getAllTasks() {
  return httpServices.get("/tasks/allTasks");
}

export function getMyTasks() {
  return httpServices.get("/tasks/myTasks");
}

export function uploadTask(values) {
  return httpServices.post("/tasks/", values);
}
