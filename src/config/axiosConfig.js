import axios from "axios";

const axiosConfig = () => {

}

export const authorize = (googleData) => {
    return apiCall.post(
        "/auth",
        {
            tokenId: googleData.tokenId
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
};

export const apiCall = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosConfig;