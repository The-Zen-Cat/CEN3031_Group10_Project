import React, { useState } from 'react';
import axios from 'axios';
//import ResourceItem from '../components/ResourceItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import List from '@mui/material/List';
//import ListItem from '@mui/material/ListItem';
//import Divider from '@mui/material/Divider';
//import ListItemText from '@mui/material/ListItemText';
//import ListItemAvatar from '@mui/material/ListItemAvatar';
import Grid from '@mui/material/Unstable_Grid2';
//import Box from '@mui/material/Box';
//import { styled } from '@mui/material/styles';
import './SearchComponent.css';
//import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import ResultCard from './ResultCards.js';

export default function FilteredListCards(propss) {
  const didMount = React.useRef(false);
  const [resArray, setresArray] = useState([1, 2, 3]);
  const [isLoading, setLoading] = useState(true);
  const [favoritesOnlyVar, setFavoritesOnly] = useState(false);

  const favoritesOnly = () => {
    setFavoritesOnly(true);
  };

  const printAll = () => {
    setFavoritesOnly(false);
  };

  const backButton = () => {
    printAll();
    propss.setPrintResults();
  };

  React.useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      //console.log('in conditional??');
      return;
    }
    //console.log('why twice??');
    var lat;
    var lon;
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyBkW9_W0_3RA0eJ7zddGbVj667mZe--cPM`,
          {}
        )
        .then((response) => {
          console.log(response);
          console.log(response.data.results[4].address_components[0].long_name);
          propss.setZip(response.data.results[4].address_components[0].long_name);
          propss.setZip22(response.data.results[4].address_components[0].long_name);

          //console.log(zipCode);
        });
      //GET REQUEST:
      //
    });
  }, [propss.zipCode2]);
  // var resourceArray = [];
  React.useEffect(() => {
    if (!didMount.current || propss.zipCode === 0) {
      didMount.current = true;
      return;
    }
    var paramsArray = {};
    paramsArray.addressZip = parseInt(propss.zipCode);
    console.log(paramsArray);
    axios
      .get(
        `http://localhost:3001/api/filterResources/`,
        {
          params: { paramsArray }
        },
        { withCredentials: true } //TODO - THE DEFAULT FOR THIS SHOULD BE ZIP CODE (LOCATION BASED IN BROWSER)
      )
      .then((response) => {
        console.log(response.data);
        setresArray([]);
        for (let i = 0; i < response.data.length; i++) {
          setresArray((prevArray) => {
            return [response.data[i], ...prevArray];
          });
        }
        setLoading(false);
      });
  }, [propss.zipCode2]);

  React.useEffect(() => {
    //console.log('in second effect land');
    if (propss.newSearch == 0) {
      //console.log('returnsecondeffect');
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
      .get(
        `http://localhost:3001/api/filterResources/`,
        {
          params: { paramsArray }
        },
        { withCredentials: true }
      )
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
    return (
      <Grid container justifyContent="center">
        <Card sx={{ margin: 1, minWidth: 600, maxWidth: 600 }}>
          <CardContent>
            <div>
              <h3>Loading Resources...</h3>
            </div>
          </CardContent>
        </Card>
      </Grid>
    );
  } else if (resArray.length == 0) {
    propss.setPrintFalse();
    return (
      <Grid container justifyContent="center">
        <Card sx={{ margin: 1, minWidth: 600, maxWidth: 600 }}>
          <CardContent>
            <div>
              <h3>
                Uh oh! We do not have any resources for zip code {propss.zipSearchVal} just yet. If
                you are interested in becoming a resource champion for your area, please click on
                the SignUp button to learn more! Otherwise, please retry your search with a
                different zip code.
              </h3>
            </div>
          </CardContent>
        </Card>
      </Grid>
    );
  } else if (resArray.length > 1) {
    propss.setPrintTrue();
  }

  const printTheStuff = () => {
    window.print();
  };
  return (
    <div>
      <Grid container justifyContent="center">
        {propss.printing ? (
          <div>
            <Button variant="text" onClick={backButton}>
              back
            </Button>
            <Button variant="text" onClick={favoritesOnly}>
              Show Favorites Only
            </Button>
            <Button variant="text" onClick={printAll}>
              Show All
            </Button>
            <Button variant="text" onClick={printTheStuff}>
              Print
            </Button>
            <br></br>
          </div>
        ) : null}
      </Grid>
      <Grid container display="flex" justifyContent="center">
        <Grid container spacing={2} justifyContent="center">
          {resArray.map((resource) => (
            <ResultCard
              favoritesOnly={favoritesOnlyVar}
              key={resource._id}
              name={resource.name}
              isFood={resource.isFood}
              isShelter={resource.isShelter}
              isClothing={resource.isClothing}
              isHealthcare={resource.isHealthcare}
              openHours={resource.openHours}
              addressStreet={resource.addressStreet}
              addressCity={resource.addressCity}
              addressState={resource.addressState}
              addressZip={resource.addressZip}
              phoneNumber={resource.phoneNumber}
              acceptsMinors={resource.acceptsMinors}
              acceptsAdults={resource.acceptsAdults}
              acceptsMen={resource.acceptsMen}
              acceptsWomen={resource.acceptsWomen}
              isReligious={resource.isReligious}
              description={resource.description}
              photoURL={resource.photoURL}
              websiteURL={resource.URL}
              createdAt={resource.createdAt}
              updatedAt={resource.updatedAt}
              opentime={resource.opentime}
              closetime={resource.closetime}
              printing={propss.printing}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
