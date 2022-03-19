import {createContext, useContext, useState} from "react";
import {authorize} from "../../config/axiosConfig";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

    const navigator = useNavigate();
    const [googleData, setGoogleData] = useState(
        localStorage.getItem(process.env.DATA_NAME_AFTER_LOGIN_GOOGLE)
            ? JSON.parse(localStorage.getItem(process.env.DATA_NAME_AFTER_LOGIN_GOOGLE))
            : null
    );

    const handleLogin = async (data) => {
        const responseGoogleData = (await authorize(data)).data;
        setGoogleData(responseGoogleData);
        localStorage.setItem(process.env.DATA_NAME_AFTER_LOGIN_GOOGLE, JSON.stringify(responseGoogleData));
        navigator('/zalogowano');
    };

    const handleLogout = () => {
        setGoogleData(null);
        localStorage.removeItem(process.env.DATA_NAME_AFTER_LOGIN_GOOGLE);
        navigator('/wylogowano');
    }

    const value = {
        googleData,
        login: handleLogin,
        logout: handleLogout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
}