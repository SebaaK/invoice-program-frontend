import {Box, Container, CssBaseline, Grid, Link, TextField, Typography} from "@mui/material";
import {LoadingButton} from '@mui/lab';
import {useState} from "react";
import {apiCall} from "../../config/axiosConfig";

const Home = () => {

    const [taxId, setTaxId] = useState('');
    const [loading, setLoading] = useState(false);

    const handleEvent = e => {
        e.preventDefault();
        setLoading(true);
        apiCall.get("business/taxNumber/" + taxId)
            .then((response) => console.log(response));
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
                        sx={{ color: '#fff !important'}}
                        type="number"
                        color="primary"
                        margin="normal"
                        required
                        fullWidth
                        id="taxId"
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
                            <Link href="#" variant="body2">
                                Nie masz swojego konta? Stwórz je!
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Home;