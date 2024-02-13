import { Client } from "./index.api";

async function getBrands() {
  const response = await Client.get("/brands");
  const data = response.data;
  const result = data.result;

  return result;
}
async function getBrand(id: string) {
  const response = await Client.get(`/brands/${id}`);
  const data = response.data;
  const result = data.result;

  return result;
}

const brands = {
  getBrands,
  getBrand,
};

export default brands;
