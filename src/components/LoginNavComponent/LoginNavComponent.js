import {Box} from "@mui/material";
import AvatarAfterLogin from "../AvatarAfterLogin/AvatarAfterLogin";
import GoogleButtonLogin from "../GoogleButtonLogin/GoogleButtonLogin";
import {useAuth} from "../AuthProvider/AuthProvider";

const LoginNavComponent = () => {

    const auth = useAuth();

    return (
        <Box sx={{ flexGrow: 0 }}>
            {
                auth.googleData
                ? <AvatarAfterLogin />
                : <GoogleButtonLogin />
            }
        </Box>
    );
}

export default LoginNavComponent;