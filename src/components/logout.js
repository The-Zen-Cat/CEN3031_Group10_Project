import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
const LogOut = () => {
  React.useEffect(() => {
    axios
      .get(`http://localhost:3001/api/logout`, {
        withCredentials: true
      })
      .then((d) => {
        console.log(d);
        window.location.href = '/';
      });
  });

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1000,
        margin: 8,
        marginLeft: 14,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Grid>
        <Typography variant="h3" gutterBottom>
          Thank you for visiting The Homeless Helper!
        </Typography>
      </Grid>
    </Box>
  );
};

export default LogOut;
