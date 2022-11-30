import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [userType, setUserType] = React.useState('');

  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type of User</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userType}
          label="Type of User"
          onChange={handleChange}
        >
          <MenuItem value={10}>Resource Coordinator</MenuItem>
          <MenuItem value={20}>Service Provider</MenuItem>
          <MenuItem value={30}>Service Beneficiary</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}