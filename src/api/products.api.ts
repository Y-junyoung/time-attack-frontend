import { Client } from "./index.api";

async function getProducts() {
  const response = await Client.get("/products");
  const data = response.data;
  const result = data.result;

  return result;
}
async function getProduct(id: string) {
  const response = await Client.get(`/products/${id}`);
  const data = response.data;
  const result = data.result;

  return result;
}

const products = {
  getProducts,
  getProduct,
};

export default products;
