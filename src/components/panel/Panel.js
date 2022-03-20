import {useAuth} from "../AuthProvider/AuthProvider";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {Box, Button, Container, CssBaseline} from "@mui/material";

const Panel = () => {

    const auth = useAuth();
    const navigator = useNavigate();

    const handleNewInvoice = () => navigator("/fakutra/nowa");

    useEffect(() => {
        if (!auth.googleData.businessId)
            navigator("/businessinfo")
    }, []);

    return (
        <Container component="main" maxWidth="lg" sx={{mt: 8}}>
            <CssBaseline/>
            <Box flex justifyContent="center" alignContent="center">
                <Button variant="outlined" onClick={handleNewInvoice}>Wystaw nową fakturę!</Button>
            </Box>
        </Container>
    );
}

export default Panel;