const API_BASE = 'https://api.escuelajs.co/api/v1/';
const createApiRoute = (route: string) => `${API_BASE}${route}`;

export const apiRoutes = {
  products: 'https://localhost:7205/Products',
  productById: (id: string | undefined) => `https://localhost:7205/Products/${id}`,
  categories: 'https://localhost:7205/categories',
  login: createApiRoute('auth/login'),
  profile: createApiRoute('auth/profile'),
  refreshUserToken: createApiRoute('auth/refresh-token'),
  users: createApiRoute('users'),
  upload: 'https://api.cloudinary.com/v1_1/dz4cfzida/image/upload',
};
