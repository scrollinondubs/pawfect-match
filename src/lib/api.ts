import axios from 'axios';
import { mockProfiles } from './mockData';
import { useAuthStore } from '../store/useAuthStore';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authApi = {
  login: async (email: string, password: string) => {
    // Simulated API call
    await delay(1000);
    return { data: { token: 'mock-token', user: { id: '1', email } } };
  },
  register: async (email: string, password: string) => {
    await delay(1000);
    return { data: { token: 'mock-token', user: { id: '1', email } } };
  },
  logout: () => api.post('/auth/logout'),
};

// Temporary mock implementation
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const profilesApi = {
  discover: async () => {
    await delay(1000);
    return { data: mockProfiles };
  },
  getProfile: async (id: string) => {
    await delay(500);
    const profile = mockProfiles.find(p => p.id === id);
    return { data: profile };
  },
  updateProfile: (id: string, data: any) => api.put(`/api/profiles/${id}`, data),
  uploadPhoto: (id: string, file: File) => {
    const formData = new FormData();
    formData.append('photo', file);
    return api.post(`/api/profiles/${id}/photos`, formData);
  },
};

export const matchesApi = {
  getMatches: () => api.get('/api/matches'),
  createSwipe: async (profileId: string, direction: 'left' | 'right') => {
    await delay(300);
    return { data: { success: true } };
  },
};

export const messagesApi = {
  getMessages: (matchId: string) => api.get(`/api/matches/${matchId}/messages`),
  sendMessage: (matchId: string, content: string, mediaUrl?: string) =>
    api.post(`/api/matches/${matchId}/messages`, { content, mediaUrl }),
};