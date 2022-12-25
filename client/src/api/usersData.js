import axios from "axios";

export const userLogin = async (email, password) => {
    const response = await axios.post('api/v1/users/login', {
        email,
        password
    }).then(res => {
        console.log(res)
    }).catch(e => {
        console.log(e)
    })

    return response
}