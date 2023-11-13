import axios from "axios";
import { CookieKeys, CookiesStorage } from "./cookies";

const http2 = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BINAR,
  timeout: 30000,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

http2.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${CookiesStorage.get(CookieKeys.AuthToken) ? CookiesStorage.get(CookieKeys.AuthToken) : ""}`,
  };
  return config;
});
export default http2;
