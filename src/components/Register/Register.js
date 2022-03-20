import {Box, Button, Container, CssBaseline, Grid, Stack, TextField, Typography} from "@mui/material";
import * as yup from 'yup';
import SaveIcon from '@mui/icons-material/Save';
import CountrySelect from "../CountrySelect/CountrySelect";
import {useAuth} from "../AuthProvider/AuthProvider";
import {Form, Formik} from "formik";
import {apiCall} from "../../config/axiosConfig";
import {useNavigate} from "react-router-dom";

const Register = () => {

    const authData = useAuth().googleData;
    const navigator = useNavigate();

    const validationSchema = yup.object({
        taxId: yup.string()
            .required()
            .matches(/^[0-9]+$/, "Tylko cyfry")
            .length(10, "Musi być dokładnie 10 liczb"),
        fullName: yup.string()
            .max(60, "Nazwa nie może być dłuższa niż 60 znaków")
            .required("Pełna nazwa firmy jest wymagana"),
        address: yup
            .string()
            .max(120, "Adres nie może być dłuższy niż 120 znaków")
            .required("Adres jest wymagany"),
        postalCode: yup
            .string()
            .matches(/^\d{2}(?:[-\s]\d{3})?$/, "Spróbuj XX-XXX")
            .min(6)
            .max(6)
            .required(),
        city: yup.string()
            .max(50, "Miasto nie może być dłuższe niż 50 znaków")
            .required("Miasto jest wymagane"),
        emailAddress: yup.string().email().required()
    });

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
                <Typography component="h2" variant="h5">
                    By móc wystawiać faktury musisz uzupełnić poniższe dane
                </Typography>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{
                        fullName: "",
                        address: "",
                        postalCode: "",
                        city: "",
                        taxId: 0,
                        emailAddress: authData.email ? authData.email : '',
                        country: ""
                    }}
                    onSubmit={(values) => {
                        apiCall.post(
                            "/business",
                            JSON.stringify(values, null, 2)
                            );
                        navigator("/panel");
                    }}
                >
                    {formik  => (
                        <Form>
                            <Grid container spacing={1}>
                                <Grid item alignItems="center" justifyContent="center">
                                    <Stack direction="row" spacing={40}>
                                        <CountrySelect name="country" setFieldValue={formik.setFieldValue} />
                                        <TextField
                                            name="taxId"
                                            label="Numer NIP"
                                            variant="outlined"
                                            onChange={formik.handleChange}
                                            error={formik.touched.taxId && Boolean(formik.errors.taxId)}
                                            helperText={formik.touched.taxId && formik.errors.taxId}
                                        />
                                        {/*<LoadingButton*/}
                                        {/*    size="small"*/}
                                        {/*    loadingIndicator="Pobieranie danych..."*/}
                                        {/*    variant="outlined"*/}
                                        {/*>*/}
                                        {/*    Pobierz dane po numerze NIP*/}
                                        {/*</LoadingButton>*/}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="fullName"
                                        label="Pełna nazwa firmy"
                                        variant="outlined"
                                        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                        helperText={formik.touched.fullName && formik.errors.fullName}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="address"
                                        label="Adres"
                                        variant="outlined"
                                        error={formik.touched.address && Boolean(formik.errors.address)}
                                        helperText={formik.touched.address && formik.errors.address}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="postalCode"
                                        label="Kod pocztowy"
                                        variant="outlined"
                                        error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
                                        helperText={formik.touched.postalCode && formik.errors.postalCode}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="city"
                                        label="Miasto"
                                        variant="outlined"
                                        error={formik.touched.city && Boolean(formik.errors.city)}
                                        helperText={formik.touched.city && formik.errors.city}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        disabled
                                        value={authData.email}
                                        fullWidth
                                        name="emailAddress"
                                        label="Adres E-mail"
                                        variant="outlined"
                                        error={formik.touched.emailAddress && Boolean(formik.errors.emailAddress)}
                                        helperText={formik.touched.emailAddress && formik.errors.emailAddress}
                                        onChange={formik.handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} display="flex" justifyContent="center">
                                    <Stack direction="row" spacing={2}>
                                        <Button
                                            variant="contained"
                                            endIcon={<SaveIcon/>}
                                            type="submit">Zaaktualizuj profil</Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Container>
    );
}

export default Register;