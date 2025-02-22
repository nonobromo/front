import httpServices from "./httpService";

export function addRemark(id, text) {
  return httpServices.post(`/tasks/${id}/remarks`, { text });
}

export function markAsComplete(id) {
  return httpServices.patch(`/tasks/${id}`);
}

export function deleteTask(id) {
  return httpServices.delete(`/tasks/${id}`);
}

export function editTask(id, task) {
  return httpServices.put(`/tasks/${id}`, task);
}

export function getTask(id) {
  return httpServices.get(`/tasks/${id}`);
}

export function getAllTasks() {
  return httpServices.get("/tasks/allTasks");
}

export function getMyTasks(id) {
  return httpServices.get(`/tasks/myTasks/${id}`);
}

export function uploadTask(values) {
  return httpServices.post("/tasks/", values);
}
