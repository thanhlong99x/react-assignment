import axiosClient from "./axiosClient";

export const getAllC= () =>{
    const url = `/categories`;
    return axiosClient.get(url);
};
export const editC= (item) =>{
    const url = `/categories/${item.id}`;
    return axiosClient.put(url, item);
};
export const getC = (id) => {
    const url = `categories/${id}`;
    return axiosClient.get(url);
  };
export const removeC= (id) =>{
    const url = `/categories/${id}`;
    return axiosClient.delete(url);
};
export const addC= (item) =>{
    const url = `/categories`;
    return axiosClient.post(url, item);
};
export const getProductById= (id) =>{
    const url = `/categories/${id}/product`;
    return axiosClient.post(url);
};