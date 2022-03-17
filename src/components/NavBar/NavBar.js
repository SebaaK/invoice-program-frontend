import {AppBar, Container, Toolbar, Typography} from "@mui/material";
import LoginNavComponent from "../LoginNavComponent/LoginNavComponent";

const NavBar = () => {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        InvoiceProgram
                        <Typography variant="p" noWrap component="div" sx={{ mt: '23px', ml: '-60px'}}>
                            by
                            <a style={{textDecoration: 'none', color: "#c96d3b", fontWeight: 'bold'}} href="https://github.com/SebaaK" target="_blank" rel="noreferrer">Sebaa</a>
                        </Typography>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                    <LoginNavComponent/>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;