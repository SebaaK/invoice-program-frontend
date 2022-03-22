import {Box, Container, CssBaseline, Typography} from "@mui/material";
import {useState} from "react";
import {apiCall} from "../../config/axiosConfig";

const Home = () => {

    const [taxId, setTaxId] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleEvent = e => {
        e.preventDefault();
        setError(false);
        setLoading(true);
        apiCall.get("business/taxNumber/" + taxId)
            .then((response) => console.log(response.data))
            .catch(() => setError(true));
        setLoading(false);
    }

    return (
        <Container component="main" maxWidth="lg">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h2" sx={{mb: 5}}>
                    Program fakturowy!
                </Typography>
            <img src={`${process.env.PUBLIC_URL}/image.svg`} alt="Pic" />
            </Box>
        </Container>
    );
}

export default Home;