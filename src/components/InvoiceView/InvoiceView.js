import {Box, Container, CssBaseline, Divider} from "@mui/material";

const InvoiceView = () => {

    return (
        <Container maxWidth="lg">
            <CssBaseline/>

            <Box
                sx={{
                    mt: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Divider>Nagłówek faktury</Divider>
                <Divider>Pozycje faktury</Divider>
                <Divider>Zapłata</Divider>
            </Box>
        </Container>
    );
}

export default InvoiceView;