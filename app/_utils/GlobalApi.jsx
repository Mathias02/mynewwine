

const { default: axios } = require("axios");


const axiosClient = axios.create({
    baseURL : 'http://127.0.0.1:1337/api'
})


const getCategories = () => axiosClient.get('/categories?populate=*');
const productCategory = (category) => axiosClient.get(`/products?filters[categories][Name][$in]=${category}&populate=*`)

export default {
    getCategories,
    productCategory
}