import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";

const Card = () => {
    return (
        <Grid item xs={12} sm={4} sx={{border: '2px solid #534E4A'}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Name Surname
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    author
                </Typography>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, unde.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Grid>
    );
};

export default Card;
