import * as api from "./api.js";

const endpoints = {
  recent: "/data/laptops?sortBy=_createdOn%20desc&distinct=category",
  // all: "/data/laptops?sortBy=_createdOn%20des",
  all: "/jsonstore/laptops",
  create: "/jsonstore/laptops",
  byId: "/data/laptops/",
  deleteById: "/data/laptops/",
  update: "/data/laptops/",
};

export async function getRecent() {
  return api.get(endpoints.recent);
}

export async function getAll() {
  return api.get(endpoints.all);
}

export async function getById(id) {
  return api.get(endpoints.byId + id);
}

export async function create(data) {
  return api.post(endpoints.create, data);
}

export async function deleteById(id) {
  await api.del(endpoints.deleteById + id);
}

export async function update(id, data) {
  return api.put(endpoints.update + id, data);
}
