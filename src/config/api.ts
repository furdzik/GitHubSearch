import axios, { AxiosError, AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache'
  }
});

instance.interceptors.response.use(
  (response: AxiosResponse): any => response,
  (error: AxiosError): any => { throw error; }
);

export default instance;
