import axios from "axios";

const baseUrl = import.meta.env.VITE_API_HOST
const instance = axios.create({
    baseUrl
})

const {get, post, put} = instance

export {get, post, put}