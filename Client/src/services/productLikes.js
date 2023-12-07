import * as api from "./api.js";

export async function productLike(productId) {
  return api.post("/data/like", {
    productId,
  });
}

export async function getLikes(productId) {
  return api.get(
    `/data/like?where=productId%3D%22${productId}%22&distinct=_ownerId&count`
  );
}

export async function getOwnLike(productId, userId) {
  return api.get(
    `/data/like?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}
