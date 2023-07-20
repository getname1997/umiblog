import type { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import axios from 'axios';
import commonStorage from '@/utils/commonStorage';
// import server from '@/request/server';
// import api from '@/request/api';
const service = axios.create({
  baseURL: '/api',
  timeout: 20000,
  headers: { 'Content-Type': 'application/json' },
});
// 请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 添加tokens
    if (commonStorage.get('token')) {
      (config.headers as AxiosRequestHeaders).Authorization = commonStorage.get('token') as string;
    } else {
      // 返回登入页 + 报错
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截
service.interceptors.response.use(
  (response) => {
    if (response.data.code !== 200) {
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default service;
