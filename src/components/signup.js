import * as React from 'react';
import { useState } from 'react';
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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
//import { set } from 'mongoose';

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

export default function SignUp() {
  const [zipcodeclears, setzipcodeclears] = useState(false);
  const [zipCodeTaken, setZipCodeTaken] = useState(false);
  const [signupsuccess, setsignupsuccess] = useState(false);
  const [signuptryagain, setsignuptryagain] = useState(false);

  //setzipcodeclears('true');
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      zipcode: data.get('zipcode'),
      email: data.get('email'),
      password: data.get('password'),
      userType: data.get('userType')
    });
    let paramsArray = {};
    paramsArray.zipcode = data.get('zipcode');
    paramsArray.username = data.get('email');
    paramsArray.password = data.get('password');
    paramsArray.userType = data.get('userType');
    axios
      .get(
        `http://localhost:3001/api/signup`,
        {
          params: { paramsArray }
        },
        { withCredentials: true }
      )
      .then((d) => {
        console.log(d);
        console.log(d.data);
        var response = d.data;
        if (response == 'user already exists') {
          setsignupsuccess(false);
          setsignuptryagain(true);
        } else {
          setsignupsuccess(true);
        }
        //window.location.href = '/Log%In';
      });
  };

  const [userType, setUserType] = React.useState('');

  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  const stopsubmission = (event) => {
    event.preventDefault();
    let paramsArray = {};
    const data = new FormData(event.currentTarget);
    if (data.get('zipcode') == '') {
      paramsArray.zipcode = '0';
    } else {
      paramsArray.zipcode = data.get('zipcode');
    }
    console.log('Event value:' + paramsArray.zipcode);
    axios
      .get(
        `http://localhost:3001/api/zipCheck`,
        {
          params: { paramsArray }
        },
        { withCredentials: true }
      )
      .then((d) => {
        console.log(d.data);
        var isTaken = d.data;
        if (isTaken === 'ZipCodeAvailable!') {
          console.log('ZipAvailable! Woohoo!');
          setzipcodeclears(true);
          setZipCodeTaken(false);
        } else {
          setzipcodeclears(false);
          console.log('ZipCode Not Available :-(');
          if (data.get('zipcode') == '') {
            console.log('dummy');
          } else {
            setZipCodeTaken(true);
          }
        }
      });
  };
  if (!signupsuccess) {
    if (zipcodeclears) {
      if (signuptryagain) {
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
                  Sign Up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}></Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="zipcode"
                        label="Zip Code of Resources You Want to Manage"
                        name="zipcode"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel id="userType">Type of User</InputLabel>
                        <Select
                          labelId="userType"
                          id="userType"
                          value={userType}
                          label="userType"
                          name="userType"
                          onChange={handleChange}>
                          <MenuItem value={'ResourceCoordinator'}>Resource Coordinator</MenuItem>
                          <MenuItem value={'ServiceProvider'}>Service Provider</MenuItem>
                          <MenuItem value={'ServiceBeneficiary'}>Service Beneficiary</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    Uh oh! That user already exists, try again or click below to Sign in if you
                    already have an account!
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="I want to occasional emails with updates and new features from the team at The Homeless Helper!"
                      />
                    </Grid>
                  </Grid>
                  <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/Log In" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Copyright sx={{ mt: 5 }} />
            </Container>
          </ThemeProvider>
        );
      } else {
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
                  Sign Up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}></Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="zipcode"
                        label="Zip Code of Resources You Want to Manage"
                        name="zipcode"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel id="userType">Type of User</InputLabel>
                        <Select
                          labelId="userType"
                          id="userType"
                          value={userType}
                          label="userType"
                          name="userType"
                          onChange={handleChange}>
                          <MenuItem value={'ResourceCoordinator'}>Resource Coordinator</MenuItem>
                          <MenuItem value={'ServiceProvider'}>Service Provider</MenuItem>
                          <MenuItem value={'ServiceBeneficiary'}>Service Beneficiary</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="I want to occasional emails with updates and new features from the team at The Homeless Helper!"
                      />
                    </Grid>
                  </Grid>
                  <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/Log In" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Copyright sx={{ mt: 5 }} />
            </Container>
          </ThemeProvider>
        );
      }
    } else if (!zipCodeTaken) {
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
                Sign Up
              </Typography>
              <Box component="form" noValidate onSubmit={stopsubmission} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}></Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="zipcode"
                      label="Check Zip Code Availability"
                      name="zipcode"
                    />
                  </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Check Zip Code
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/Log In" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      );
    } else {
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
                Sign Up
              </Typography>
              <Box component="form" noValidate onSubmit={stopsubmission} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}></Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="zipcode"
                      label="Check Zip Code Availability"
                      name="zipcode"
                    />
                  </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Check Zip Code
                </Button>
                Zip Code Taken<br></br> or Incorrect Length!
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/Log In" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      );
    }
  } else {
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
              Sign Up
            </Typography>
            <br></br>
            Sign up Successful! Thank you for contributing to the Homeless Helper!<br></br>
            <br></br>
            <Link href="/Log In" variant="body2">
              Click here to LogIn!
            </Link>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
}
