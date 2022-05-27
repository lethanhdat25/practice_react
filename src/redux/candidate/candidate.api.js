import Axios from "axios";

const candidatePath = "/candidates";

const accessToken = localStorage.getItem("accessToken");
if (accessToken) {
  Axios.interceptors.request.use((config) => {
    config.headers.Authorization = "Bearer " + accessToken;
    return config;
  });
}
export const getAllApi = (page) => {
  return Axios.get(candidatePath, { params: { page } });
};

export const createApi = (data) => {
  return Axios.post(candidatePath, data);
};
