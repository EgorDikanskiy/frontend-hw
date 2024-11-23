import axios from 'axios';
import { apiRoutes } from 'config/apiRoutes';

interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await axios.post(apiRoutes.login, { email, password });
  return response.data;
};

export const getProfile = async (token: string) => {
  const response = await axios.get(apiRoutes.profile, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const refreshToken = async (refreshToken: string): Promise<LoginResponse> => {
  const response = await axios.post(apiRoutes.refreshUserToken, { refreshToken });
  return response.data;
};

export const register = async (name: string, email: string, password: string, avatar: string) => {
  const response = await axios.post(apiRoutes.users, { name, email, password, avatar });
  return response.data;
};
