import axiosClient from "./axiosClient"

class AuthApi {
    HandleAuthentication = async (
        url: string,
        data ?: any,
        method ?: "get" | "post" | "delete" | "put",
    ) => {
        return await axiosClient(`/auth${url}`,{
            method: method ?? 'get',
            data,
        });
    }
};

const authenticationAPI = new AuthApi();
export default authenticationAPI;