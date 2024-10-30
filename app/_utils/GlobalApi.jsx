

const { default: axios } = require("axios");


const axiosClient = axios.create({
    baseURL : process.env.NEXT_PUBLIC_BASE_URL
})


const getCategories = () => axiosClient.get('/categories?populate=*');
const productCategory = (category) => axiosClient.get(`/products?filters[categories][Name][$in]=${category}&populate=*`)

export default {
    getCategories,
    productCategory
}