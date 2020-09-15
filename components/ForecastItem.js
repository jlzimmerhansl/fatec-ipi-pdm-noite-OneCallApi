import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Card from './Card';

// import { Container } from './styles';

const ForecastItem = (props) => {
  return (
    <Card styles={styles.card}>
      <View style={styles.screen}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://openweathermap.org/img/wn/' +
              props.forecast.weather[0].icon +
              '.png',
          }}
        />
        <View style={styles.firstLine}>
          <Text>
            {new Date(props.forecast.dt * 1000).toLocaleTimeString()} -{' '}
            {props.forecast.weather[0].description}
          </Text>
        </View>
      </View>
      <View style={styles.secondLine}>
        <Text style={styles.lineText}>
          Nascer do Sol:
          {new Date(props.forecast.sunrise * 1000).toLocaleTimeString()} |
        </Text>
        <Text style={styles.lineText}>
          Por do Sol:
          {new Date(props.forecast.sunset * 1000).toLocaleTimeString()}
        </Text>
      </View>
      <View style={styles.thirdLine}>
        <Text style={styles.lineText}>Sensação Térmica</Text>
      </View>
      <View style={styles.fourthLine}>
        <Text style={styles.lineText}>
          Manhã: {props.forecast.feels_like.morn}°C |
        </Text>
        <Text style={styles.lineText}>
          Tarde: {props.forecast.feels_like.day}°C |
        </Text>
        <Text style={styles.lineText}>
          Noite: {props.forecast.feels_like.eve}°C
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 8,
  },
  screen: {
    flexDirection: 'row',
    marginTop: 8,
  },
  image: {
    width: 50,
    height: 50,
  },
  firstLine: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  secondLine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  thirdLine: {
    flex: 1,
    justifyContent: 'center',
    borderTopWidth: 1,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  fourthLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  lineText: {
    marginHorizontal: 2,
  },
});
export default ForecastItem;
