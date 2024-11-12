const API_BASE = 'https://api.escuelajs.co/api/v1/';
const createApiRoute = (route: string) => `${API_BASE}${route}`;

export const apiRoutes = {
    products: createApiRoute('products'),
    productById: (id: string | undefined) => createApiRoute(`products/${id}`),
    categories: 'https://api.escuelajs.co/api/v1/categories',
};