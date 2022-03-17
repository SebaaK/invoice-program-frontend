import {Button, Container, CssBaseline, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const NotFound = () => {

    return (
        <Container component="main" maxWidth="lg" sx={{alignItems: 'center', justifyItems: 'center'}}>
            <CssBaseline/>
            <Typography variant="h3">404 - Strony nie znaleziono</Typography>
            <Link to="/" sx={{textDecoration: 'none'}}>
                <Button variant="contained">Przenieś na stronę główną!</Button>
            </Link>
        </Container>
    );
}

export default NotFound;