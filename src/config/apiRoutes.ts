const API_BASE = 'https://api.escuelajs.co/api/v1/';
const createApiRoute = (route: string) => `${API_BASE}${route}`;

export const apiRoutes = {
  products: createApiRoute('products'),
  productById: (id: string | undefined) => createApiRoute(`products/${id}`),
  categories: createApiRoute('categories'),
  login: createApiRoute('auth/login'),
  profile: createApiRoute('auth/profile'),
  refreshUserToken: createApiRoute('auth/refresh-token'),
  users: createApiRoute('users'),
  upload: 'https://api.cloudinary.com/v1_1/dz4cfzida/image/upload',
};
