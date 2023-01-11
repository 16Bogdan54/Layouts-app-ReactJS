import React, {ReactNode} from 'react';
import {Grid,Card, CardActions, CardContent, Button, Typography} from "@mui/material";

interface Props {
    fullName: string,
    link: string,
    children: string | ReactNode
}

const AuthorCard = ({fullName, link, children}: Props) => {
    return (
        <Grid item xs={12} sm={4} >
            <Card variant="outlined" sx={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                <CardContent>
                    <Typography variant="h5">
                        {fullName}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        author
                    </Typography>
                    <Typography variant="body2">
                        {children}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button target="_blank" href={link} size="small">Github</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default AuthorCard;
