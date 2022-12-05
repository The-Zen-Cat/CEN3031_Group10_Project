import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import thor from './images/thor.png';
import zach from './images/zach.png';
import kathleen from './images/kathleen.png';
import ben from './images/ben.png';


const About = () => {
    return (
        <div>
        <Grid container display="flex" justifyContent="center" margin={3}>
            <Grid container spacing={2} justifyContent="center">
            <Card sx={{ margin: 1, minWidth: 300, maxWidth: 300 }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={thor}
                    alt="Thor Johansson"
                />
                <CardContent>
                    <h3>Thor Johansson</h3>
                </CardContent>
            </Card>
            <Card sx={{ margin: 1, minWidth: 300, maxWidth: 300 }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={zach}
                    alt="Zachary Schirm"
                />
                <CardContent>
                    <h3>Zachary Schirm</h3>
                </CardContent>
            </Card>

            <Card sx={{ margin: 1, minWidth: 300, maxWidth: 300 }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={ben}
                    alt="Benjamin Weiss"
                />
                <CardContent>
                    <h3>Benjamin Weiss</h3>
                </CardContent>
            </Card>
            <Card sx={{ margin: 1, minWidth: 300, maxWidth: 300 }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={kathleen}
                    alt="Kathleen Tiley"
                />
                <CardContent>
                    <h3>Kathleen Tiley</h3>
                </CardContent>
            </Card>
            </Grid>

        </Grid>
        <Grid container justifyContent="center">
            <Card>
                <CardContent sx={{margin: 1, minWidth: 800, maxWidth: 800}}>
                    <h3>About Us</h3>
                    <p>We are an innovative group of software engineers excited to help connect people with the resources they need!
                        We hope you enjoy using the Homeless Helper as much as we have enjoyed designing it. The Homeless Helper grew
                        out of our experiences serving the homeless in our communities. Without an easy-to-use, consolidated list of
                        local resources for the homeless, it was difficult for transient individuals to access information about the
                        resources available to them, and difficult for service provider staff to help out. We hope this tool will help 
                        connect homeless individuals with the information they need to take best advantage of the resources at 
                        disposal.

                    </p>
                </CardContent>

            </Card>
        </Grid>
        </div>
    );
}

export default About;