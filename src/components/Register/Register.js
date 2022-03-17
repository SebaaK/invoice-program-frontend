import {Box, Button, Container, CssBaseline, Grid, Stack, TextField, Typography} from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SaveIcon from '@mui/icons-material/Save';
import CountrySelect from "../CountrySelect/CountrySelect";
import {LoadingButton} from "@mui/lab";

const Register = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target);
    }

    const setCodeCountry = (code) => {
        // setCountryCode(code);
    }

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline/>
            <Box
                sx={{
                    mt: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h4">
                    Formularz rejestracyjny
                </Typography>
                <Box component="form" sx={{mt: 5}} onSubmit={handleSubmit}>
                    <Grid container spacing={1}>
                        <Grid item alignItems="center" justifyContent="center">
                            <Stack direction="row" spacing={12}>
                                <CountrySelect codeCountry={setCodeCountry}/>
                                <TextField
                                    name="taxId"
                                    label="Numer NIP"
                                    variant="outlined"
                                />
                                <LoadingButton
                                    size="small"
                                    loadingIndicator="Pobieranie danych..."
                                    variant="outlined"
                                >
                                    Pobierz dane po numerze NIP
                                </LoadingButton>
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="fullName"
                                label="Pełna nazwa firmy"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="address"
                                label="Adres"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="postalCode"
                                label="Kod pocztowy"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="city"
                                label="Miasto"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="emailAddress"
                                label="Adres E-mail"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} display="flex" justifyContent="center">
                            <Stack direction="row" spacing={2}>
                                <Button
                                    variant="contained"
                                    endIcon={<SaveIcon/>}
                                    type="submit">Utwórz konto</Button>
                                <Button
                                    variant="contained"
                                    startIcon={<RestartAltIcon/>}
                                    type="reset">Resetuj pola</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Register;