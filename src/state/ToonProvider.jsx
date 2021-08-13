import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchRickAndMortyCharacters } from '../services/r&mApi';
import { fetchFuturamaCharacters } from '../services/futuramaApi';
import { fetchHeyArnoldCharacters } from '../services/heyArnoldApi';
import { fetchAirBenderCharacters } from '../services/airBenderApi';

const ToonContext = createContext();

export const ToonProvider = ({ children }) => {

  const [toons, setToons] = useState([]);
  const [selectedApi, setSelectedApi] = useState('rickAndMorty');

  const apiMap = {
    rickAndMorty: fetchRickAndMortyCharacters,
    futurama: fetchFuturamaCharacters,
    airbender: fetchAirBenderCharacters,
    heyArnold: fetchHeyArnoldCharacters,
  };

  useEffect(() => {
    apiMap[selectedApi]().then(setToons);
  }, [selectedApi]);

  return (
    <ToonContext.Provider value={{ toons, setSelectedApi, apiMap }}>
      {children}
    </ToonContext.Provider>
  );

};

export const useToons = () => {
  const { toons } = useContext(ToonContext);
  return toons;
};

export const useSetSelectedApi = () => {
  const { setSelectedApi } = useContext(ToonContext);
  return setSelectedApi;
};

export const useAvailableAPIs = () => {
  const { apiMap } = useContext(ToonContext);
  return Object.keys(apiMap);
};
