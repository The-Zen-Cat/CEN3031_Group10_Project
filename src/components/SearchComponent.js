import * as React from 'react';
//import { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
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
import './SearchComponent.css';

export default function SearchComponent(propss) {
  return (
    <div>
      <div className="searchstyle">
        <Stack spacing={2} direction="row">
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off">
            <TextField
              id="standard-basic"
              label="Search by Name"
              variant="standard"
              onChange={(event) => {
                propss.onsearchNameChange(event.target.value);
              }}
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
              id="standard-basic"
              label="Enter ZipCode"
              variant="standard"
              onChange={(event) => {
                propss.ononSearchZipChange(event.target.value);
              }}
            />
          </Box>
        </Stack>
        <Stack spacing={2} direction="row">
          <FormControlLabel
            control={
              <Checkbox checked={propss.menCheckState} onChange={propss.oncheckboxmenchange} />
            }
            label="Men"
          />
          <FormControlLabel
            control={
              <Checkbox checked={propss.womenCheckState} onChange={propss.oncheckboxwomenchange} />
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
        </Stack>
        <FormGroup></FormGroup>
        <Stack spacing={2} direction="row">
          <FormControlLabel
            control={
              <Checkbox
                checked={propss.healthcareCheckState}
                onChange={propss.oncheckboxhealthcarechange}
              />
            }
            label="Healthcare"
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
        <Stack spacing={2} direction="row">
          {' '}
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Type of Service Offered</FormLabel>
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
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={propss.onhandleSearchClick}>
            Search
          </Button>
        </Stack>{' '}
      </div>
    </div>
  );
}
