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

export async function register(email, password) {
  const user = await api.post(endpoint.register, { email, password });
  setUserData(user);
  return user;
}

export function logout() {
  api.get(endpoint.logout);
  clearUserData();
}
