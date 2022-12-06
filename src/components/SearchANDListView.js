import * as React from 'react';
import SearchComponent from './SearchComponent';
//import FilteredListView from './FilteredListView';
import FilteredListCards from './FilteredListCards';
import { useState } from 'react';
//import { Wrapper, Status } from '@googlemaps/react-wrapper';
//import Grid from '@mui/material/Unstable_Grid2';

function SearchANDListView() {
  const [nameSearchVal, setnameSearchVal] = useState('');
  const [zipSearchVal, setzipSearchVal] = useState('');
  const [menCheckState, setmenCheckState] = useState(false);
  const [womenCheckState, setwomenCheckState] = useState(false);
  const [childrenCheckState, setchildrenCheckState] = useState(false);
  const [healthcareCheckState, sethealthcareCheckState] = useState(false);
  const [isreligiousCheckState, setisreligiousCheckState] = useState(false);
  const [typeOService, settypeOService] = useState('All');
  const [newSearch, setnewSearch] = useState(0);
  const [zipCode, setZipCode] = useState(0);
  const [zipCode2, setZip2] = useState(0);
  const [printResults, setPrintResults] = useState(false);
  const [canPrint, setCanPrint] = useState(false);
  //need to pass up state

  const setZip = (value) => {
    setZipCode(value);
    setzipSearchVal(value);
  };

  const printButtonTrue = () => {
    setCanPrint(true);
  };
  const printButtonFalse = () => {
    setCanPrint(false);
  };

  const setZip22 = (value) => {
    setZip2(value);
    setzipSearchVal(value);
  };

  const searchNameChange = (eventval) => {
    setnameSearchVal(eventval);
  };

  const onSearchZipChange = (eventval) => {
    setzipSearchVal(eventval);
  };

  const handleSearchClick = () => {
    console.log(nameSearchVal, zipSearchVal);
    console.log(newSearch);
    setnewSearch(newSearch + 1);
    console.log(newSearch);
  };

  const checkboxmenchange = () => {
    setmenCheckState(!menCheckState);
    console.log(menCheckState);
  };

  const checkboxwomenchange = () => {
    setwomenCheckState(!womenCheckState);
    console.log(womenCheckState);
  };

  const checkboxhealthcarechange = () => {
    sethealthcareCheckState(!healthcareCheckState);
    console.log(healthcareCheckState);
  };

  const checkboxreligiouschange = () => {
    setisreligiousCheckState(!isreligiousCheckState);
    console.log(isreligiousCheckState);
  };

  const checkboxchildrenchange = () => {
    setchildrenCheckState(!childrenCheckState);
    console.log(childrenCheckState);
  };
  const checkboxservicechange = (event) => {
    settypeOService(event.target.value);
    console.log(typeOService);
  };

  const resetSearchState = () => {
    setnewSearch(newSearch + 1);
  };

  const setPrintResultsFunc = () => {
    if (printResults == true) {
      setPrintResults(false);
    } else {
      setPrintResults(true);
    }
  };

  return (
    <div>
      {printResults ? null : (
        <SearchComponent
          setZip2={setZip2}
          googleZip={zipCode}
          setZip={setZip}
          menCheckState={menCheckState}
          womenCheckState={womenCheckState}
          childrenCheckState={childrenCheckState}
          healthcareCheckState={healthcareCheckState}
          isreligiousCheckState={isreligiousCheckState}
          typeOService={typeOService}
          onhandleSearchClick={handleSearchClick}
          oncheckboxmenchange={checkboxmenchange}
          oncheckboxwomenchange={checkboxwomenchange}
          oncheckboxhealthcarechange={checkboxhealthcarechange}
          oncheckboxreligiouschange={checkboxreligiouschange}
          oncheckboxchildrenchange={checkboxchildrenchange}
          oncheckboxservicechange={checkboxservicechange}
          onsearchNameChange={searchNameChange}
          ononSearchZipChange={onSearchZipChange}
          setPrintResults={setPrintResultsFunc}
          canPrint={canPrint}
          nameSearchVal={nameSearchVal}
        />
      )}

      <FilteredListCards
        zipCode2={zipCode2}
        setZip={setZip}
        setZip22={setZip22}
        zipCode={zipCode}
        menCheckState={menCheckState}
        womenCheckState={womenCheckState}
        childrenCheckState={childrenCheckState}
        healthcareCheckState={healthcareCheckState}
        isreligiousCheckState={isreligiousCheckState}
        typeOService={typeOService}
        nameSearchVal={nameSearchVal}
        zipSearchVal={zipSearchVal}
        newSearch={newSearch}
        resetSearchState={resetSearchState}
        handleSearchClick={handleSearchClick}
        printing={printResults}
        setPrintResults={setPrintResultsFunc}
        setPrintTrue={printButtonTrue}
        setPrintFalse={printButtonFalse}
      />
    </div>
  );
}

export default SearchANDListView;
