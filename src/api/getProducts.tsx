import axios from 'axios';

export interface GetProductsParams {
    title?: string;
    categoryId?: number;
    offset?: number;
    limit?: number;
}

export interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
}

export async function getProducts(params: GetProductsParams): Promise<Products[]> {
    const response = await axios.get<Products[]>('https://api.escuelajs.co/api/v1/products', {
        params,
    });
    return response.data;
}