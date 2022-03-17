import {Box, Container, CssBaseline, Grid, Link, TextField, Typography} from "@mui/material";
import {LoadingButton} from '@mui/lab';
import {useState} from "react";
import {apiCall} from "../../config/axiosConfig";
import {Link as LinkRouter} from "react-router-dom";

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
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Zaloguj się
                </Typography>
                <Box component="form" noValidate sx={{mt: 1}} onSubmit={handleEvent}>
                    <TextField
                        type="number"
                        color="primary"
                        margin="normal"
                        required
                        fullWidth
                        id="taxId"
                        disabled={loading}
                        error={error}
                        label="NIP firmy"
                        name="taxId"
                        focused
                        onChange={event => setTaxId(event.target.value)}
                    />
                    <LoadingButton
                        type="submit"
                        loading={loading}
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Zaloguj!
                    </LoadingButton>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <LinkRouter to="/register">
                                <Link to="/register" variant="body2">
                                    Nie masz swojego konta? Stwórz je!
                                </Link>
                            </LinkRouter>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Home;