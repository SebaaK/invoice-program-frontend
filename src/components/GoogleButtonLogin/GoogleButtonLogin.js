import GoogleLogin from "react-google-login";
import {authorize} from "../../config/axiosConfig";

const GoogleButtonLogin = ({ setLoginData }) => {

    const handleLogin = async (data) => {
        const responseData = (await authorize(data)).data;
        setLoginData(responseData)
        localStorage.setItem(process.env.DATA_NAME_AFTER_LOGIN_GOOGLE, JSON.stringify(responseData));
    };

    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Logowanie do Google"
            onSuccess={handleLogin}
            cookiePolicy={'single_host_origin'}
        />
    );
}

export default GoogleButtonLogin;