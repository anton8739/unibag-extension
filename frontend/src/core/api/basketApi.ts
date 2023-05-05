
import qs from 'qs';
import BaseApi from "./baseApi";
import {ProductI} from "../../types";

class BasketApi {
    client;
    constructor(client:any) {
        this.client = client;
    }
    getSelectors = async (data: {origin: string}) => {
        return  await this.client.post('/api/parsing/get_selectors/', data);
    }
    getAllProducts = async () => {
        return  await this.client.get('/api/products/');
    };
    addProduct = async (data: ProductI) => {
        return  await this.client.post('/api/products/add_to_cart/', data);
    }
    removeProduct = async (data: ProductI) => {
        return  await this.client.delete(`/api/products/${data.id}/delete_from_cart/`);
    }
}

export default new BasketApi(BaseApi);
