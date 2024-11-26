import { makeAutoObservable } from 'mobx';
import { login, getProfile, refreshToken, register } from 'api/auth';

export interface User {
  id: number;
  email: string;
  name: string;
  role: string;
  avatar: string;
}

export class AuthStore {
  user: User | null = null; // Текущий пользователь
  accessToken: string | null = localStorage.getItem('access_token');
  refreshToken: string | null = localStorage.getItem('refresh_token');
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
    this.loadUserFromStorage();
  }

  // Регистрация с загрузкой аватара
  async registerWithAvatar(name: string, email: string, password: string, file: File | null) {
    try {
      let avatarUrl = '';

      if (file) {
        avatarUrl = await this.uploadAvatar(file); // Загрузка файла
      }

      await this.register(name, email, password, avatarUrl); // Регистрация
    } catch (error) {
      console.error('Registration with avatar failed:', error);
      throw error;
    }
  }

  // Загрузка файла аватара
  async uploadAvatar(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('https://api.escuelajs.co/api/v1/files/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload avatar.');
    }

    const data = await response.json();
    return data.location; // URL загруженного файла
  }

  async register(name: string, email: string, password: string, avatar: string) {
    try {
      await register(name, email, password, avatar);
      // После регистрации можно сразу войти:
      await this.login(email, password);
    } catch (err) {
      console.error('Registration failed:', err);
      throw err;
    }
  }

  async loadUserFromStorage() {
    if (this.accessToken) {
      try {
        const profile = await getProfile(this.accessToken);
        this.setUser(profile);
      } catch (error) {
        console.error('Error loading the user:', error);
        this.logout();
      }
    }
  }

  async login(email: string, password: string) {
    this.setLoading(true);
    try {
      const data = await login(email, password);
      this.setTokens(data.access_token, data.refresh_token);

      const profile = await getProfile(data.access_token);
      this.setUser(profile);
    } catch (error) {
      console.error('Authorization error:', error);
      throw error;
    } finally {
      this.setLoading(false);
    }
  }

  setUser(user: User) {
    this.user = user;
  }

  setTokens(accessToken: string, refreshToken: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;

    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
  }

  async refreshAccessToken() {
    if (!this.refreshToken) {
      this.logout();
      return;
    }

    try {
      const data = await refreshToken(this.refreshToken);
      this.setTokens(data.access_token, data.refresh_token);
    } catch (error) {
      console.error('Token update error:', error);
      this.logout();
    }
  }

  logout = () => {
    this.user = null;
    this.accessToken = null;
    this.refreshToken = null;

    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  };

  setLoading(loading: boolean) {
    this.loading = loading;
  }
}

export default AuthStore;
