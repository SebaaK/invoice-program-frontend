import GoogleLogin from "react-google-login";
import {useEffect, useState} from "react";
import {apiCall} from "../../config/axiosConfig";

const Test = () => {

    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
            ? JSON.parse(localStorage.getItem('loginData'))
            : null
    );

    const handleFailure = (result) => {
        alert(result);
    }

    const handleLogin = async (googleData) => {
        const s = JSON.stringify({
            tokenId: googleData.tokenId
        });

        console.log(s);
        const response = await apiCall.post('/auth', {
            tokenId: googleData.tokenId
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = response.data;
        setLoginData(data);
        localStorage.setItem('loginData', JSON.stringify(data));
    }

    const handleLogout = () => {
        localStorage.removeItem('loginData');
        setLoginData(null);
    };

    return (<div>
        {
            !loginData
                ? (<GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Logowanie do Google"
                    onSuccess={handleLogin}
                    onFailure={handleFailure}
                    cookiePolicy={'single_host_origin'}
                />)
                : (<button onClick={handleLogout}>Logout</button>)
        }
    </div>);
}

export default Test;