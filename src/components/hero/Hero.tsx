import React from 'react';
import {Typography, Grid} from '@mui/material'

const Hero = () => {
    return (
        <Grid container spacing={2} sx={{
            maxHeight: '100vh',
            backgroundImage: "url('src/assets/background.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '1rem'
        }}>
            <Grid item xs={12} sm={6} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem'}}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>The perfect set of css layouts ideas for your project</Typography>
                <Typography variant="body1" gutterBottom>If you don’t wanna waste your time writing boilerplate code in your CSS files check out our layouts!</Typography>
            </Grid>
           <Grid item xs={12} sm={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
               <img src="src/assets/insert-block.svg" alt="illustration blocks"/>
           </Grid>
        </Grid>
    );
};

export default Hero;
