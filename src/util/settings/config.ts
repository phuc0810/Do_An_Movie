import { ACCESSTOKEN } from "@types";
import axios from "axios";

export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNyIsIkhldEhhblN0cmluZyI6IjA3LzA2LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NjA5NjAwMDAwMCIsIm5iZiI6MTY1NzIxMzIwMCwiZXhwIjoxNjg2MjQzNjAwfQ.S0dhEC93DT6Ph-Eh2v-GDOb1El9gd9e7KdXhqUXtWuc";

export const DOMAIN = "https://movienew.cybersoft.edu.vn";

//Cấu hình interceptor
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});

http.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      TokenCybersoft: TOKEN_CYBERSOFT,
      Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
    };

    return config;
  },
  (errors) => {
    return Promise.reject({ errors });
  }
);
