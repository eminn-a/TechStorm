export const productValidation = (productData) => {
  // Object.values(productData).forEach((x) => {
  //   let trimed = x.trim();
  //   if (trimed === "") {
  //     throw new Error("Fields can not be empty space!");
  //   }
  // });
  if (Object.values(productData).some((x) => x === "")) {
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
  if (productData.display.length > 50) {
    throw new Error("Display should be less than 50 characters");
  }
  if (productData.os.length > 20) {
    throw new Error("OS should be less than 20 characters");
  }
  if (productData.description.length > 350) {
    throw new Error("Description should be less than 350 characters");
  }

  return productData;
};

export default productValidation;
