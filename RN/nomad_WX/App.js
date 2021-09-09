import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "7b5db902a899309d8eafaf4001da7b09";

const App = () => {
  const [wx, setWx] = useState({
    loading: true,
    temp: '',
  })

  const {loading, temp} = wx

  const wxAPI = async (lat, lon) => {
    const {data} = await axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    
      setWx({
        loading: false,
        temp: data.main.temp
      })
  }

  useEffect(() => {
    (async () => {
      try {
        await Location.requestForegroundPermissionsAsync();
        const {
          coords: {latitude, longitude}
        } = await Location.getCurrentPositionAsync();
        
        wxAPI(latitude, longitude)
      } catch (err) {
        Alert.alert('cant find you', 'so sad')
      }
    })();
  }, []);

  return (
    <React.Fragment>
    {loading ? <Loading /> : <Weather temp={Math.round(temp)}/>}
    </React.Fragment>
  );
}

export default App;

