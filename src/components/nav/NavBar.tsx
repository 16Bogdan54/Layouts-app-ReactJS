import React from "react";
import Logo from '../logo/Logo'
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
import {AppBar, Toolbar, Container} from "@mui/material";


const NavBar  = () => {

    return (
        <AppBar position="sticky" sx={{backgroundColor: '#313D5A'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{width: '100%',display:'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Logo/>
                    <Menu/>
                    <MobileMenu/>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;