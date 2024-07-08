import axios from "axios";
import queryString from "query-string";
const BASE_URL = "http://192.168.1.128:3001";
const axiosClient = axios.create({
    baseURL: BASE_URL,
    paramsSerializer: params => queryString.stringify(params)
});

axiosClient.interceptors.request.use(async (config: any) => {
    config.headers = {
    Authorization: '',
    Accept: 'application/json',
    ...config.headers
};
    config.data

    return config
});

axiosClient.interceptors.response.use(res => {
    if (res.data && res.status === 200) {
        return res.data;
    }
    throw new Error('Error');
}, err => {
    console.log(`Error api ${JSON.stringify(err)}`);
    throw new Error(err.response);
})

export default axiosClient;