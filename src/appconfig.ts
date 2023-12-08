import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/api",
});

export const createUser = (payload: any) => api.post(`/user/create`, payload);
export const getAllUsersList = () => api.get(`/user/list`);
export const updateUser = (id: String, payload: any) =>
  api.post(`/user/update/${id}`, payload);
export const getUserById = (id: String) => api.get(`/user/fetch/${id}`);
export const deleteUser = (id: String) => api.delete(`/user/delete/${id}`);

const apis = {
  createUser,
  getAllUsersList,
  updateUser,
  getUserById,
  deleteUser,
};

export default apis;
