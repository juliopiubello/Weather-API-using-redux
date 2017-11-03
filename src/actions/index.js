import axios from 'axios';

const API_KEY = '1a9bbf0c926df0f7143f7bf99c6fab48';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  //console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request // Returning the promise as the payload
    //payload is an optional property that goes along with actions
    //that can contain some additional data that describes this
    //particular action
  };
}
