import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Configurar Axios para enviar token en todas las solicitudes
axios.interceptors.request.use(config => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

export const getDashboardData = async () => {
  const response = await axios.get(`${API_URL}/dashboard`);
  return response.data;
};