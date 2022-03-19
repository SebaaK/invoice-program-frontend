import GoogleLogin from "react-google-login";
import {useAuth} from "../AuthProvider/AuthProvider";

const GoogleButtonLogin = () => {

    const auth = useAuth();

    const handleLogin = async (data) => {
        await auth.login(data);
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