import axios from "axios"

const BASE_URL='http://192.168.100.12/apis/'

export const axiosClient=axios.create({
    baseURL:BASE_URL
})
export const SIGN_IN='sign_in.php'