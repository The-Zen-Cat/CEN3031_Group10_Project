import React, { useState } from 'react';
import axios from 'axios';
//import ResourceItem from '../components/ResourceItem';
//import Card from '../UI/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
//import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './SearchComponent.css';

export default function FilteredListView(propss) {
  const didMount = React.useRef(false);
  const [resArray, setresArray] = useState([1, 2, 3]);
  const [isLoading, setLoading] = useState(true);
  // var resourceArray = [];
  React.useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    axios
      .get(`http://localhost:3001/api/filterResources/`, {
        params: {} //TODO - THE DEFAULT FOR THIS SHOULD BE ZIP CODE (LOCATION BASED IN BROWSER)
      })
      .then((response) => {
        setresArray([]);
        for (let i = 0; i < response.data.length; i++) {
          setresArray((prevArray) => {
            return [response.data[i], ...prevArray];
          });
          setLoading(false);
        }
      });
  }, []);

  React.useEffect(() => {
    console.log('in second effect land');
    if (propss.newSearch == 0) {
      console.log('returnsecondeffect');
      return;
    }
    console.log('doingthelordswork');
    //setup search params based on selections:
    var paramsArray = {};
    if (propss.menCheckState == true) {
      paramsArray.acceptsMen = 'true';
    }
    if (propss.womenCheckState == true) {
      paramsArray.acceptsWomen = 'true';
    }
    if (propss.childrenCheckState == true) {
      paramsArray.acceptsMinors = true;
    }
    if (propss.healthcareCheckState == true) {
      paramsArray.isHealthcare = true;
    }
    if (propss.isreligiousCheckState == true) {
      paramsArray.isReligious = true;
    }
    if (propss.typeOService == 'Food') {
      paramsArray.isFood = true;
    }
    if (propss.typeOService == 'Clothing') {
      paramsArray.isClothing = true;
    }
    if (propss.typeOService == 'Shelter') {
      paramsArray.isShelter = true;
    }
    if (propss.typeOService == 'Healthcare') {
      paramsArray.isHealthcare = true;
    }
    if (propss.nameSearchVal) {
      paramsArray.name = propss.nameSearchVal;
    }
    if (propss.zipSearchVal) {
      paramsArray.addressZip = parseInt(propss.zipSearchVal);
    }
    console.log(paramsArray);
    axios
      .get(`http://localhost:3001/api/filterResources/`, {
        params: { paramsArray }
      })
      .then((response) => {
        setresArray([]);
        for (let i = 0; i < response.data.length; i++) {
          setresArray((prevArray) => {
            return [response.data[i], ...prevArray];
          });
        }
        console.log(response.data);
      });
    console.log('resettingsearchstate');
    propss.resetSearchState;
  }, [propss.newSearch]);

  React.useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    //console.log(resArray);
  }, [resArray]);

  if (isLoading) {
    return <div>Loading list...</div>;
  }

  //NEED TO CHANGE IMAGE SOURCE
  return (
    <List
      className="searchstyle"
      sx={{ margin: 2, width: '100%', maxWidth: 512, bgcolor: 'background.paper' }}>
      {resArray.map((resource) => (
        <ListItem alignItems="flex-start" key={resource._id}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={resource.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"></Typography>
                {resource.description}
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
