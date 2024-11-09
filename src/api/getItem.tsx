import axios from "axios";
import { apiRoutes } from "config/apiRoutes";


export type Item = {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
}


export const getItem = async (id: string | undefined) =>
    (await axios.get(apiRoutes.productById(id))).data;

