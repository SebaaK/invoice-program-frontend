import {Avatar, IconButton, Tooltip} from "@mui/material";

const AvatarAfterLogin = ({ loginData, setLoginData }) => {

    const logoutHandler = () => {
        localStorage.removeItem(process.env.DATA_NAME_AFTER_LOGIN_GOOGLE);
        setLoginData(null);
    }

    return (
        <Tooltip title="Kliknij, by wylogować!">
            <IconButton sx={{p: 0}} onClick={logoutHandler}>
                <Avatar alt={`${loginData.givenName} ${loginData.familyName}`} src={loginData.picture}/>
            </IconButton>
        </Tooltip>
    );
}

export default AvatarAfterLogin;