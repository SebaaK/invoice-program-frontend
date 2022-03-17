import {Box} from "@mui/material";
import {useState} from "react";
import AvatarAfterLogin from "../AvatarAfterLogin/AvatarAfterLogin";
import GoogleButtonLogin from "../GoogleButtonLogin/GoogleButtonLogin";

const LoginNavComponent = () => {
    const [loginData, setLoginData] = useState(
        localStorage.getItem(process.env.DATA_NAME_AFTER_LOGIN_GOOGLE)
            ? JSON.parse(localStorage.getItem(process.env.DATA_NAME_AFTER_LOGIN_GOOGLE))
            : null
    );

    return (
        <Box sx={{ flexGrow: 0 }}>
            {
                loginData
                ? <AvatarAfterLogin loginData={loginData} setLoginData={setLoginData}/>
                : <GoogleButtonLogin setLoginData={setLoginData}/>
            }
        </Box>
    );
}

export default LoginNavComponent;