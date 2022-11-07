import * as React from 'react';
import SearchComponent from './SearchComponent';
import FilteredListView from './FilteredListView';
import { useState } from 'react';

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
  //need to pass up state

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

  const checkboxservicechange = (event: React.ChangeEvent<HTMLInputElement>) => {
    settypeOService(event.target.value);
    console.log(typeOService);
  };

  const resetSearchState = () => {
    setnewSearch(newSearch + 1);
  };

  return (
    <div>
      <SearchComponent
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
      />
      <FilteredListView
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
      />
    </div>
  );
}

export default SearchANDListView;
