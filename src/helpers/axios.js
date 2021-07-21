import axios from 'axios';
import { API_KEY, BASE_URL } from '../config';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

export default axiosInstance;
