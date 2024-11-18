import axios from "axios";
import { apiRoutes } from "config/apiRoutes";


export type Category = {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}


export const getCategories = async () =>
    (await axios.get<Category[]>(apiRoutes.categories)).data;
