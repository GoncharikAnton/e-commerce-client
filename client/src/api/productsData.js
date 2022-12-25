import axios from "axios";
axios.defaults.withCredentials = true;


export const getAllProducts = async () => {
    const response = await axios.get('/api/v1/products')

    return response
}
export const getProductById = async (id) => {

    const response = await axios.get(`/api/v1/products/${id}`)

    return response
}
export const getProductImagesById = async (id) => {
    const response = await axios.get(`/api/v1/products?image=${id}`)

    return response
}
export const getProductsSpecs = async (id, category_id) => {
    const response = await axios.get(`/api/v1/products?category=${category_id}&id=${id}`)

    return response
}
