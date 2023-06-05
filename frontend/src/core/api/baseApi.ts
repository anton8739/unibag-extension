import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies();
const client = axios.create({
    baseURL: `https://9131-193-233-48-44.ngrok-free.app/`,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
    }
});
client.interceptors.request.use(async (config) => {
    config.headers.accept = `application/json`;
    const result = await chrome.storage.local.get(["token"])
    if (result.token) {
        config.headers.authorization = `Token ${result.token}`;
    }
    return config;
});
class BaseApi {
    http;

    constructor(client:any) {
        this.http = client;
    }

    get = async (url:string, params:any) => {
        try {
            return await this.http.get(url, params);
        } catch (e:any) {
            console.error(e.message);
            return { isError: true, message: e.message, shownMessage: e.response?.data?.message };
        }
    };

    post = async (url:string, data:any, config:any) => {
        try {
            return await this.http.post(url, data, config);
        } catch (e:any) {
            console.error(e.message);
            return { isError: true, message: e.message, shownMessage: e.response?.data?.message };
        }
    };

    put = async (url:string, params:any) => {
        try {
            return await this.http.put(url, params);
        } catch (e:any) {
            console.error(e.message);
            return { isError: true, message: e.message, shownMessage: e.response?.data?.message };
        }
    };

    delete = async (url:any) => {
        try {
            return await this.http.delete(url);
        } catch (e:any) {
            console.error(e.message);
            return { isError: true, message: e.message, shownMessage: e.response?.data?.message };
        }
    };

    patch = async (url:string, data:any, config:any) => {
        try {
            return await this.http.patch(url, data, config);
        } catch (e:any) {
            console.error(e.message);
            return { isError: true, message: e.message, shownMessage: e.response?.data?.message };
        }
    };

    options = async (url:string, params:any) => {
        return await this.http.options(url, params);
    };
}

export default new BaseApi(client);
