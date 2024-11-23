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

  async register(name: string, email: string, password: string, avatar: string) {
    try {
      const { data } = await register(name, email, password, avatar);
      console.log(data);
      // После регистрации можно сразу войти:
      await this.login(email, password);
    } catch (err) {
      console.error('Registration failed:', err);
    }
  }

  // Загружаем пользователя из локального хранилища
  async loadUserFromStorage() {
    if (this.accessToken) {
      try {
        const profile = await getProfile(this.accessToken);
        this.setUser(profile);
      } catch (error) {
        console.error('Ошибка при загрузке пользователя:', error);
        this.logout();
      }
    }
  }

  // Авторизация
  async login(email: string, password: string) {
    this.setLoading(true);
    try {
      const data = await login(email, password);
      this.setTokens(data.access_token, data.refresh_token);

      const profile = await getProfile(data.access_token);
      this.setUser(profile);
    } catch (error) {
      console.error('Ошибка авторизации:', error);
      throw error;
    } finally {
      this.setLoading(false);
    }
  }

  // Устанавливаем пользователя
  setUser(user: User) {
    this.user = user;
  }

  // Устанавливаем токены
  setTokens(accessToken: string, refreshToken: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;

    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
  }

  // Обновляем токен
  async refreshAccessToken() {
    if (!this.refreshToken) {
      this.logout();
      return;
    }

    try {
      const data = await refreshToken(this.refreshToken);
      this.setTokens(data.access_token, data.refresh_token);
    } catch (error) {
      console.error('Ошибка обновления токена:', error);
      this.logout();
    }
  }

  // Выход из системы
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
