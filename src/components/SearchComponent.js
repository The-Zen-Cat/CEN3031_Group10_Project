import * as React from 'react';
//import { useState } from 'react';
//import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import './SearchComponent.css';
//import axios from 'axios';
import Grid from '@mui/material/Unstable_Grid2';

export default function SearchComponent(propss) {
  const stopEnter = (event) => {
    if (event.keyCode === 13) {
      //13 is the key code for Enter
      event.preventDefault();
      //Here you can even write the logic to select the value from the drop down or something.
    }
  };
  return (
    <Grid container justifyContent="center">
      <Card sx={{ margin: 1, minWidth: 600, maxWidth: 600 }}>
        <CardContent>
          <Grid container justifyContent="center">
            <Stack spacing={2} direction="row">
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' }
                }}
                noValidate
                autoComplete="off">
                <TextField
                  id="filled-start-adornment"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">Name:</InputAdornment>
                  }}
                  label="Search by Name"
                  variant="standard"
                  value={propss.nameSearchVal}
                  onChange={(event) => {
                    propss.onsearchNameChange(event.target.value);
                  }}
                  onKeyDown={stopEnter}
                />
              </Box>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' }
                }}
                noValidate
                autoComplete="off">
                <TextField
                  id="filled-start-adornment"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">ZipCode:</InputAdornment>
                  }}
                  value={propss.googleZip} //change to google maps zip
                  label="Search by ZipCode"
                  variant="standard"
                  onChange={(event) => {
                    propss.ononSearchZipChange(event.target.value);
                    propss.setZip(event.target.value);
                  }}
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') propss.ononSearchZipChange(event.target.value);
                    propss.onhandleSearchClick;
                  }}
                  onKeyDown={stopEnter}
                />
              </Box>
            </Stack>
          </Grid>
          <Grid container justifyContent="center">
            <Stack spacing={2} direction="row">
              <FormControlLabel
                control={
                  <Checkbox checked={propss.menCheckState} onChange={propss.oncheckboxmenchange} />
                }
                label="Men"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={propss.womenCheckState}
                    onChange={propss.oncheckboxwomenchange}
                  />
                }
                label="Women"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={propss.childrenCheckState}
                    onChange={propss.oncheckboxchildrenchange}
                  />
                }
                label="Children"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={propss.isreligiousCheckState}
                    onChange={propss.oncheckboxreligiouschange}
                  />
                }
                label="isReligious"
              />
            </Stack>
          </Grid>
          <Grid container justifyContent="center">
            <Stack spacing={2} direction="row">
              {' '}
              <FormControl>
                <Grid container justifyContent="center">
                  <FormLabel id="demo-radio-buttons-group-label">Type of Service Offered</FormLabel>
                </Grid>
                <RadioGroup
                  defaultValue="All"
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={propss.typeOService}
                  onChange={propss.oncheckboxservicechange}
                  name="radio-buttons-group">
                  <FormControlLabel value="Food" control={<Radio />} label="Food" />
                  <FormControlLabel value="Clothing" control={<Radio />} label="Clothing" />
                  <FormControlLabel value="Shelter" control={<Radio />} label="Shelter" />
                  <FormControlLabel value="Healthcare" control={<Radio />} label="Healthcare" />
                  <FormControlLabel value="All" control={<Radio />} label="All" />
                </RadioGroup>
              </FormControl>
            </Stack>{' '}
          </Grid>
          <Grid container justifyContent="center">
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={propss.onhandleSearchClick}>
                Search
              </Button>
              <Button
                variant="contained"
                onClick={propss.setPrintResults}
                disabled={!propss.canPrint}>
                Print Friendly Format
              </Button>
            </Stack>{' '}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
