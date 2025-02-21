import axios from "axios";
import config from "../../config.json";

axios.defaults.baseURL = config.apiURL;

export function setDefaultCommonHeaders(headerName, value) {
  axios.defaults.headers.common[headerName] = value;
}

axios.defaults.headers.common;

const httpServices = {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
  patch: axios.patch,
  setDefaultCommonHeaders,
};

export default httpServices;
