import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather, selectWeather, setLocation } from "./weatherSlice";

export const Weather = () => {
  const weather = useSelector(selectWeather);
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ((position) => {
        dispatch(
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        );
      })
    );
  }, [dispatch]);

  useEffect(() => {
    if (weather.lat && weather.lon) {
      dispatch(
        getWeather({
          lat: weather.lat,
          lon: weather.lon,
        })
      );
    }
  }, [dispatch, weather.lat, weather.lon]);

  return (
    <div className="weather">
      <div className='weather__section'>
        <img
        className='weather__img'
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon && weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description && weather.weather[0].description}
        ></img>
        <h2
        className='weather__temp'
        >{weather.main.temp && parseInt(weather.main.temp)} &#8451;</h2>
      </div>
      <div className='weather__section'>
        <p className='weather__info'>{weather.weather[0].main && weather.weather[0].main}&nbsp;</p>
        <p className='weather__city'>- {weather.name && weather.name}</p>
      </div>
    </div>
  );
};
