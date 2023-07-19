import axios, { AxiosInstance } from 'axios';

export const client:AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_IP,
    headers: {'Content-Type': 'application/json', }
})

export const authClient:AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_IP,
    headers: {'Content-Type': 'application/json', }
})

authClient.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem("hostToken");
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );