import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Keyboard,
} from 'react-native';
import ForecastItem from './components/ForecastItem';

export default function App() {
  const endPointCity =
    'https://api.openweathermap.org/data/2.5/forecast?lang=pt&units=metric&q=';
  const apiKey = 'fea495ebe591b2d51dde1b1b5af6ab7f';
  const endPointForecast =
    'https://api.openweathermap.org/data/2.5/onecall?lang=pt_br&units=metric&';
  const pointLongitude = '&lon=';
  const exclude = '&exclude=hourly,current&appid=';

  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState([]);
  const [cityData, setCityData] = useState([]);

  const handleCity = () => {
    setCityData([]);
    const target = endPointCity + city + '&appid=' + apiKey;
    fetch(target)
      .then((data) => data.json())
      .then((data) => {
        setCityData(data['list']);
        var cityLongLat = data['city'];
        handleForecast(cityLongLat.coord.lat, cityLongLat.coord.lon);
        Keyboard.dismiss();
      });
    //console.log(cityData);
  };

  const handleForecast = (latitude, longitude) => {
    setForecast([]);
    const target =
      endPointForecast +
      'lat=' +
      latitude +
      pointLongitude +
      longitude +
      '&appid=' +
      apiKey;
    fetch(target)
      .then((data) => data.json())
      .then((data) => {
        setForecast(data['daily']);
        //console.log('ola');
        //console.log(data);
        Keyboard.dismiss();
      });

    //console.log(target);
    //console.log(forecast);
  };

  const captureCity = (city) => {
    setCity(city);
  };

  return (
    <View style={styles.container}>
      <View style={styles.InputEntry}>
        <TextInput
          style={styles.cityName}
          placeholder="Digite o nome da cidade..."
          value={city}
          onChangeText={captureCity}
        />
        <Button title="Pesquisar" onPress={handleCity} />
      </View>
      <FlatList
        data={forecast}
        renderItem={(forecast) => <ForecastItem forecast={forecast.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: 'column',
    flex: 1,
    borderColor: '#FFF',
  },
  cityName: {
    padding: 10,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    textAlign: 'left',
    flexGrow: 0.9,
  },
  InputEntry: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
  },
});
