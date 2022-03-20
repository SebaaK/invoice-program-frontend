import {useAuth} from "../AuthProvider/AuthProvider";
import Home from "../Home/Home";

const RequireAuth = ({ children }) => {
    const auth = useAuth();

    if(!auth.googleData) {
        return <Home/>;
    }

    return children;
}

export default RequireAuth;