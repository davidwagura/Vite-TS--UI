export interface User {
    id: number;
    name: string;
    email: string;
    role: UserRole;
  }
  
  export interface RegisterUser {
    name: string;
    email: string;
    password: string;
  }
  
  export interface LoginUser {
    email: string;
    password: string;
  }
  
  export interface AuthResponse {
    user: User;
    token: string; // Simulated token for authentication
  }
  
  export type UserRole = 'admin' | 'user';
  