import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://your-api-url.com/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});