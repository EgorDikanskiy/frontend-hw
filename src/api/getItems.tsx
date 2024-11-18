import axios from 'axios';

export interface GetItemsParams {
    title?: string;
    categoryId?: number;
    offset?: number;
    limit?: number;
}

export interface Items {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
}

export async function getItems(params: GetItemsParams): Promise<Items[]> {
    const response = await axios.get<Items[]>('https://api.escuelajs.co/api/v1/products', {
        params,
    });
    return response.data;
}