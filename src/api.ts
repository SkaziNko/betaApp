import axios from 'axios';

const API_URL = 'http://localhost:3000';
const api = axios.create({
  baseURL: API_URL,
});

// Función para registrar un usuario
export const registerUser = async (userData: { email: string; password: string; fullName: string }) => {
  try {
    const response = await api.post('/users/register', userData);
    return response.data; 
  } catch (error) {
    console.error('Error registrando usuario:', error);
    throw error;
  }
};

// Función para obtener videos recientes de un usuario
export const getRecentlyViewedVideos = async (userId: string) => {
  try {
    const response = await api.get(`/users/${userId}/recentlyViewed`);
    return response.data; 
  } catch (error) {
    console.error('Error obteniendo videos vistos:', error);
    throw error;
  }
};
