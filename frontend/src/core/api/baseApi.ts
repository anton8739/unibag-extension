import axios from 'axios';

const client = axios.create({
    baseURL: `http://193.233.48.44:8000/`,
    withCredentials: true,
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
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
