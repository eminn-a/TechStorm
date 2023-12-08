export const productValidation = (productData) => {
  if (Object.values(productData).some((x) => x == "")) {
    throw new Error("Fields are required!");
  }
  if (productData.price <= 0) {
    throw new Error("Price must be positive!");
  }
  if (!/^https?:\/\//.test(productData.imgUrl)) {
    throw new Error("image URL is not valid! (https)");
  }
  if (productData.brand.length > 29) {
    throw new Error("Brand should be less than 29 characters");
  }
  if (productData.cpu.length > 50) {
    throw new Error("CPU should be less than 50 characters");
  }
  if (productData.gpu.length > 50) {
    throw new Error("GPU should be less than 50 characters");
  }
  if (productData.ram.length > 25) {
    throw new Error("RAM should be less than 25 characters");
  }
  if (productData.storage.length > 30) {
    throw new Error("Storage should be less than 30 characters");
  }
  return productData;
};

export default productValidation;
