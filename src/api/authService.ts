import { mockApi } from '../api/apiClient';
import { AuthResponse, LoginUser, RegisterUser } from '../types/userTypes';

export const authService = {
  async registerUser(userData: RegisterUser): Promise<AuthResponse> {
    return await mockApi.post('/register', userData) as AuthResponse;
  },

  async loginUser(userData: LoginUser): Promise<AuthResponse> {
    return await mockApi.post('/login', userData) as AuthResponse;
  },
};
