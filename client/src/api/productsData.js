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

export const addToCartLocally = (user_email, product_id) => {
    const storage = JSON.parse(localStorage.getItem(user_email));
    if(localStorage.getItem(user_email)){
        if(storage.indexOf(product_id) === -1){
            storage.unshift(product_id);
            localStorage.setItem(user_email, JSON.stringify(storage));
        }
        }else{
        localStorage.setItem(user_email, JSON.stringify([product_id]))
    }
};
export const deleteFromCartLocally = (user_email, product_id) => {
    const storage = JSON.parse(localStorage.getItem(user_email));
    storage.splice(storage.indexOf(product_id),1);
    localStorage.setItem(user_email, JSON.stringify(storage));
}











