import axios from 'axios';
import { apiRoutes } from 'config/apiRoutes';

export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export async function getCategories(): Promise<Category[]> {
  const response = await axios.get(apiRoutes.categories);
  return response.data;
}
