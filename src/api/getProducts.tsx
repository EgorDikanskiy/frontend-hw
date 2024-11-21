import axios from 'axios';
import { apiRoutes } from 'config/apiRoutes';

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
  const response = await axios.get<Products[]>(apiRoutes.products, {
    params,
  });
  return response.data;
}
