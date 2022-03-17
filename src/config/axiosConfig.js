import axios from "axios";

const axiosConfig = () => {

}

export const apiCall = axios.create({
    baseURL: "http://localhost:8080/api/"
});

export default axiosConfig;