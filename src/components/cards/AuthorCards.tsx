import React from 'react';
import AuthorCard from './AuthorCard';
import {Box, Grid, Typography} from "@mui/material";

const AuthorCards = () => {
    return (
        <Box>
            <Typography mt={2} variant="h4" sx={{textAlign: 'center'}}>Authors</Typography>
            <Grid container spacing={3} padding={3}>
                <AuthorCard fullName="Name Surname" link="https://github.com/16Bogdan54">
                    {"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, non."}
                </AuthorCard>
                <AuthorCard fullName="Name Surname" link="https://github.com/16Bogdan54">
                    {"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, non."}
                </AuthorCard>
                <AuthorCard fullName="Name Surname" link="https://github.com/16Bogdan54">
                    {"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, non."}
                </AuthorCard>
            </Grid>
        </Box>
    );
};

export default AuthorCards;
