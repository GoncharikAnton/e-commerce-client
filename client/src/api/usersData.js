import axios from "axios";
import {getProductById} from "./productsData";
// axios.defaults.withCredentials = true;

export const userLogin = async (email, password) => {
    const response = await axios.post('/api/v1/users/login', {
        email,
        password
    })

    return response
};
export const userAddToWishList = async (user_id, product_id) => {
    const response = await axios.post('/api/v1/users/wishlist', {
        user_id:user_id,
        product_id:product_id
    })

    return response
};
export const userGetWishList = async (user_id) => {
    const result = await axios.get(`/api/v1/users/wishlist/${user_id}`)
    return result;
};
export const userDeleteFromWishList = async (user_id, product_id) => {
    const result = await axios.delete(`/api/v1/users/wishlist`, {data :{
            user_id,
            product_id
        }
        })
    return result;
}