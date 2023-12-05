import { clearUserData, setUserData } from "../utils.js";
import * as api from "./api.js";

const endpoint = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
};

export async function login(email, password) {
  const user = await api.post(endpoint.login, { email, password });
  setUserData(user);
  return user;
}

export async function register(email, username, password) {
  const user = await api.post(endpoint.register, { email, username, password });
  setUserData(user);
  return user;
}

export async function logout() {
  await api.get(endpoint.logout);
  clearUserData();
}
