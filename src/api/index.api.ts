import axios from "axios";
import auth from "./auth.api";
import brands from "./brans.api";
import products from "./products.api";

export const Client = axios.create({
  baseURL: "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app",
  withCredentials: true,
});

const API = { auth, products, brands };

export default API;
