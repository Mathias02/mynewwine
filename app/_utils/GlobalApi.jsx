

const { default: axios } = require("axios");




const axiosClient = axios.create({

    baseURL : "http://localhost:1337/api",
})

const getCategories = () => axiosClient.get('/categories?populate=*').then((resp) => resp.data.data);

export default {

    getCategories
}