

const { default: axios } = require("axios");


const axiosClient = axios.create({
    baseURL : 'http://localhost:1337/api'
})


const getCategories = () => axiosClient.get('/categories?populate=*');
const productCategory = (category) => axiosClient.get(`/products?filters[category][Name][$in]=${category}&populate=*`)

export default {
    getCategories,
    productCategory
}