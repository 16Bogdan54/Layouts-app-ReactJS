import React from 'react';
import {Box} from '@mui/material'

const Hero = () => {
    return (
        <Box sx={{
            height: '90vh',
            backgroundImage: "url('src/assets/background.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        }}>
            <Box sx={{

            }}>
                <h1>The perfect set of css layouts ideas for your project</h1>
                <p>If you don’t wanna waste your time writing boilerplate code in your CSS files check out our layouts!  </p>
            </Box>
           <Box>
               <img src="src/assets/insert-block.svg" alt="illustration blocks"/>
           </Box>
        </Box>
    );
};

export default Hero;
