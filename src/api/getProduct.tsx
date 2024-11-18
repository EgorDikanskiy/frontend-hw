import axios from 'axios';
import { apiRoutes } from 'config/apiRoutes';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: { id: number };
}

export async function getProduct(id: string | undefined): Promise<Product> {
  const response = await axios.get(apiRoutes.productById(id));
  return response.data;
}
