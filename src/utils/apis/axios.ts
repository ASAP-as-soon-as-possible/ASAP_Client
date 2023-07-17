import axios, { AxiosInstance } from 'axios';

export const client:AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_IP,
    headers: {'Content-Type': 'application/json', }
})