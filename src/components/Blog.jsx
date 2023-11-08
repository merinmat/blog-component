import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Like from './Like';


import foodbowl from '../assets/foodbowl.jpg';


export default function RecipeReviewCard() {

    return (

        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"

        >

            <Card sx={{
                maxWidth: 345,
                maxHeight: 600,
                m: 2,
                p: 2,

            }}>

                <CardHeader

                    action={
                        <IconButton aria-label="settings">
                        </IconButton>
                    }
                    title="Healthy Food Bowl"
                    subheader="September 14, 2023"
                />
                <CardMedia
                    component="img"
                    height="280"
                    src={foodbowl}
                    alt="foodbowl image"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque voluptates eaque minima! Corporis, sunt ipsam! Repellat odio magnam eum earum deserunt eius quos exercitationem ullam nam veniam, asperiores, ipsam perspiciatis.
                    </Typography>
                </CardContent>
                <Like />
            </Card>
        </Grid>
    );
}