export const apiRoutes = {
    products: 'https://api.escuelajs.co/api/v1/products',
    productById: (id: string | undefined) => `https://api.escuelajs.co/api/v1/products/${id}`,
    categories: 'https://api.escuelajs.co/api/v1/categories',
};