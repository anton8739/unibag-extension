
import qs from 'qs';
import BaseApi from "./baseApi";

class UserApi {
    client;
    constructor(client:any) {
        this.client = client;
    }

    login = async (data: {username:string; password:string;}) => {
        const response = await this.client.post('/auth-token/', data);
        if (response.isError) {
            console.log("error")
        } else {
            console.log(response)
        }
    };
}

export default new UserApi(BaseApi);
