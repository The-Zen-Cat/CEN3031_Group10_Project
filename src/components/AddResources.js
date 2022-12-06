import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import InputLabel from '@mui/material/InputLabel';
//import MenuItem from '@mui/material/MenuItem';
//import FormControl from '@mui/material/FormControl';
//import Select from '@mui/material/Select';
import axios from 'axios';
import AddResourceComplete from './addResourceComplete';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        The Homeless Helper
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function addResources() {
  const [added, setadded] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    var isShelter = true;
    var isFood = true;
    var isClothing = true;
    var isHealthcare = true;
    var acceptsMinors = true;
    var acceptsAdults = true;
    var acceptsMen = true;
    var acceptsWomen = true;
    var isReligious = true;
    const data = new FormData(event.currentTarget);
    console.log(data.get('isShelter'));
    if (data.get('isShelter') == 'Yes') {
      isShelter = true;
    } else {
      isShelter = false;
    }
    if (data.get('isFood') == 'Yes') {
      isFood = true;
    } else {
      isFood = false;
    }
    if (data.get('isClothing') == 'Yes') {
      isClothing = true;
    } else {
      isClothing = false;
    }
    if (data.get('isHealthcare') == 'Yes') {
      isHealthcare = true;
    } else {
      isHealthcare = false;
    }
    if (data.get('acceptsMinors') == 'Yes') {
      acceptsMinors = true;
    } else {
      acceptsMinors = false;
    }
    if (data.get('acceptsAdults') == 'Yes') {
      acceptsAdults = true;
    } else {
      acceptsAdults = false;
    }
    if (data.get('acceptsMen') == 'Yes') {
      acceptsMen = true;
    } else {
      acceptsMen = false;
    }
    if (data.get('acceptsWomen') == 'Yes') {
      acceptsWomen = true;
    } else {
      acceptsWomen = false;
    }
    if (data.get('isReligious') == 'Yes') {
      isReligious = true;
    } else {
      isReligious = false;
    }

    var paramsArray = {
      name: data.get('name'),
      isFood: isFood,
      isShelter: isShelter,
      isClothing: isClothing,
      isHealthcare: isHealthcare,
      opentime: data.get('opentime'),
      closetime: data.get('closetime'),
      addressStreet: data.get('addressStreet'),
      addressCity: data.get('addressCity'),
      addressState: data.get('addressState'),
      addressZip: data.get('addressZip'),
      phoneNumber: data.get('phoneNumber'),
      acceptsMinors: acceptsMinors,
      acceptsAdults: acceptsAdults,
      acceptsMen: acceptsMen,
      acceptsWomen: acceptsWomen,
      isReligious: isReligious,
      description: data.get('description'),
      photoURL: data.get('photoURL'),
      URL: data.get('URL')
    };
    console.log(paramsArray);
    axios
      .get(
        `http://localhost:3001/api/addResource/`,
        {
          params: { paramsArray }
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response.request.status);
        if (response.request.status == '200') {
          setadded(true);
        }
      });
  };
  if (!added) {
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add a Resource
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name of the Resource"
                    name="name"
                  />
                </Grid>
                <br></br>
                Address of the Resource:
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="addressStreet"
                    label="Street"
                    name="addressStreet"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth id="addressCity" label="City" name="addressCity" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="addressState"
                    label="State"
                    name="addressState"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth id="addressZip" label="Zip" name="addressZip" />
                </Grid>
                <br></br>
                Additional Resource Details:
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phoneNumber"
                    label="Phone Number"
                    name="phoneNumber"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth id="opentime" label="Open Time" name="opentime" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="closetime"
                    label="Close Time"
                    name="closetime"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth id="URL" label="Website URL" name="URL" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="outlined-multiline-flexible"
                    label="Enter Resource Description"
                    name="description"
                    multiline
                    maxRows={8}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth id="photoURL" label="Photo URL:" name="photoURL" />
                </Grid>
                <br></br>
                Uncheck any of the following boxes if they do not apply:<br></br>
                <br></br>
                <Grid>
                  <FormControlLabel
                    control={<Checkbox defaultChecked value="Yes" />}
                    label="isFood"
                    name="isFood"
                  />
                </Grid>
                <Grid>
                  <FormControlLabel
                    control={<Checkbox defaultChecked value="Yes" />}
                    label="isShelter"
                    name="isShelter"
                  />
                </Grid>
                <Grid>
                  <FormControlLabel
                    control={<Checkbox defaultChecked value="Yes" />}
                    label="isClothing"
                    name="isClothing"
                  />
                </Grid>
                <Grid>
                  <FormControlLabel
                    control={<Checkbox defaultChecked value="Yes" />}
                    label="isHealthcare"
                    name="isHealthcare"
                  />
                </Grid>
                <Grid>
                  <FormControlLabel
                    control={<Checkbox defaultChecked value="Yes" />}
                    label="acceptsMinors"
                    name="acceptsMinors"
                  />
                </Grid>
                <Grid>
                  <FormControlLabel
                    control={<Checkbox defaultChecked value="Yes" color="primary" />}
                    id="acceptsAdults"
                    label="acceptsAdults"
                    name="acceptsAdults"
                  />
                </Grid>
                <Grid>
                  <FormControlLabel
                    control={<Checkbox defaultChecked value="Yes" />}
                    id="acceptsMen"
                    label="acceptsMen"
                    name="acceptsMen"
                  />
                </Grid>
                <Grid>
                  <FormControlLabel
                    control={<Checkbox defaultChecked value="Yes" />}
                    label="acceptsWomen"
                    name="acceptsWomen"
                  />
                </Grid>
                <Grid>
                  <FormControlLabel
                    control={<Checkbox defaultChecked value="Yes" />}
                    label="isReligious"
                    name="isReligious"
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Submit Resource!
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    );
  } else {
    return <AddResourceComplete />;
  }
}
