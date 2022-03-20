import {Avatar, IconButton, Tooltip} from "@mui/material";
import {useAuth} from "../AuthProvider/AuthProvider";

const AvatarAfterLogin = () => {

    const auth = useAuth();
    const loginData = auth.googleData;

    const logoutHandler = () => {
        auth.logout();
    }

    return (
        <Tooltip title="Kliknij, by wylogować!">
            <IconButton sx={{p: 0}} onClick={logoutHandler}>
                <Avatar alt={loginData.name} src={loginData.picture}/>
            </IconButton>
        </Tooltip>
    );
}

export default AvatarAfterLogin;