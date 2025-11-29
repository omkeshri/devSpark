import axios from 'axios';
import environment from '@/common/environments';

// client
const api = axios.create({
  baseURL: environment.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: '*/*',
    'ngrok-skip-browser-warning': 'true',
  },
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    // No token, no Authorization header
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const res = error.response;

    return Promise.reject(res);
  }
);

// ssr
export const createSSRApi = (req: any) => {
  const cookieHeader = req.headers.cookie || "";

  return axios.create({
    baseURL: environment.API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      cookie: cookieHeader, // forward cookies as-is
    },
  });
};

export default api;
