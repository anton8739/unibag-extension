
import qs from 'qs';
import BaseApi from "./baseApi";

class UserApi {
    client;
    constructor(client:any) {
        this.client = client;
    }

    login = async (data: {username:string; password:string;}) => {
        return  await this.client.post('/auth-token/', data);
    };
    registration = async (data: {username:string; password:string;}) => {
        return   await this.client.post('/api/users/register/', data);
    };
    me = async  () => {
        return   await this.client.get('/api/users/me/');
    }
}

export default new UserApi(BaseApi);
