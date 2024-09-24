import axios from "axios";


const instance = axios.create({
    baseURL: "https://api.mercadolibre.com/sites/MLA/"
})

export default instance;