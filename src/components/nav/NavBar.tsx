import React from "react";
import Logo from '../logo/Logo'
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
import {AppBar, Toolbar, Container} from "@mui/material";


const NavBar  = () => {

    return (
        <AppBar position="sticky" sx={{backgroundColor: '#313D5A'}}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <Logo styles={{display: { xs: 'none', md: 'flex' }}}/>
                    <MobileMenu/>
                    <Logo styles={{display: { xs: 'flex', md: 'none' }}}/>
                    <Menu/>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;