import * as api from "./api.js";

export async function productBuy(product) {
  return api.post("/data/buyed", product);
}

export async function getAllbuyed(userId) {
  return api.get(
    `/data/buyed?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
  );
}

export async function deleteById(id) {
  await api.del(`/data/buyed/${id}`);
}
