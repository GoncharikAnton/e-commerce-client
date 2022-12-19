import axios from "axios";


export const getAllProducts = async () => {
    const response = await axios.get('api/v1/products')
        // .then(function (response) {
        //     // handle success
        //     console.log(response.data.data.result);
        //     return response.data.data.result
        // })
        // .catch(function (error) {
        //     // handle error
        //     console.log(error);
        // })
    return response
}
export const getProductById = async (id) => {
    const response = await axios.get(`api/v1/products/${id}`)
    return response
}