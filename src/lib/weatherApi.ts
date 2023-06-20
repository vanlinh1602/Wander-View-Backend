import axios from 'axios';

export const getCurrentWeather = async (location: string) => {
  const result = await axios.get('http://api.weatherapi.com/v1/current.json', {
    params: {
      key: process.env.WEATHER_KEY,
      q: location,
    },
  });

  return result.data;
};
