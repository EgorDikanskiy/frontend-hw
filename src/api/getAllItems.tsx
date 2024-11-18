import axios from "axios";
import { apiRoutes } from "config/apiRoutes";

export type Items = {
    category: any;
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
}

export const getAllItems = async () =>
    (await axios.get<Items[]>(apiRoutes.products)).data;
