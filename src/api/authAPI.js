import axiosClientJson from "./axiosClientJson";

export const signup = (user) => {
    console.log(user);
    const url = `/signup`;
    return axiosClientJson.post(url, user);
};
export const login = (user) => {
    console.log(user)
    const url = `/signin`;
    return axiosClientJson.post(url, user);
};