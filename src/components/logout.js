import React from 'react';
//import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Link from '@mui/material/Link';
//import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';

const LogOut = () => {
  React.useEffect(() => {
    axios
      .get(`http://localhost:3001/api/logout`, {
        withCredentials: true
      })
      .then((d) => {
        console.log(d);
        //window.location.href = '/';
      });
  });

  return (
    <div>
      <Grid container display="flex" justifyContent="center" margin={3}>
        <Grid container spacing={2} justifyContent="center"></Grid>
        <Grid container justifyContent="center">
          <Card>
            <CardContent sx={{ margin: 1, minWidth: 350, maxWidth: 800 }}>
              <p>
                <Typography variant="h5" gutterBottom>
                  Thank you for visiting The Homeless Helper!
                  <br></br>
                  <br></br>
                  <Link href="/" variant="h6">
                    Click here to Return to the Home Page
                  </Link>
                  <br></br>
                  <br></br>
                  <Link href="/Log In" variant="h6">
                    Click here to Log In Again
                  </Link>
                </Typography>
              </p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default LogOut;
