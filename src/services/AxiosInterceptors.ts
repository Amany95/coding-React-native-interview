import axios from 'axios';
import {BaseUrlApp} from '../constants/Urls';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: BaseUrlApp, // Replace with your API base URL
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Do something before request is sent
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzU0ZmE0OGU5ZmMxZjVkODAwN2M0ZDgwY2FlYzI2NyIsInN1YiI6IjY2NDc3ZTk0NmFjZWFjZWNiNTJmMzcwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QeUVSSJd7Ic07_Ca0QewiNASRMnAbL-LQEkZPXdjZSM'; // Retrieve token from state or other storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // Do something with response data
    return response;
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  },
);

export default axiosInstance;

