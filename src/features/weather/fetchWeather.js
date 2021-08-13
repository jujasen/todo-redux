import axios from 'axios';

const API_URL=process.env.REACT_APP_WEATHER_API_ROUTE;
const API_KEY=process.env.REACT_APP_WEATHER_API_KEY;

// export const fetchWeather = async ({lat, lon}) => {
//     const response = await fetch(`${API_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`);

//     const json = await response.json();

//     return {
//         temp: json.main.temp,
//         type: json.weather.main,
//         icon: json.weather.icon,
//         name: json.name
//     }
// }

export const fetchWeather = async ({lat, lon}) => {
    const response = await axios.get(`${API_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

    const json = await response.data;

    return json;
}