import axios, { AxiosInstance } from 'axios';

export const authorizedAxios:AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_IP,
    headers: {'Content-Type': 'application/json', }
})

export const unAuthorizedAxios:AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_IP,
    headers: {'Content-Type': 'application/json', }
})