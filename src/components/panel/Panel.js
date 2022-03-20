import {useAuth} from "../AuthProvider/AuthProvider";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Panel = () => {

    const auth = useAuth();
    const navigator = useNavigate();

    useEffect(() => {
        if (!auth.googleData.businessId)
            navigator("/businessinfo")
    }, []);

    return (
        <h1>
            <b>Kappa</b>
        </h1>
    );
}

export default Panel;