import React, { useEffect, useState } from "react";
import { weatherInstance } from "../../utils/axios";
import "./home.style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../redux/weatherSlice";
import WeatherDetails from "../weatherDeatils/WeatherDetails";
import {
  formatTimestamp,
  formatToDayMonthYear,
  getWeatherCoord,
  handleSearch,
  getCoord,
} from "./home.action";

function Home() {
  const dispatch = useDispatch();
  const { data: weather } = useSelector((state) => state.weather);
  const [city, setCity] = useState("guwahati");
  const [position, setPosition] = useState();

  useEffect(() => {
    handleSearch(city, dispatch);
  }, []);

  useEffect(() => {
    getWeatherCoord(position, dispatch);
  }, [position]);

  return (
    <div className="home-container">
      <div className="nav-container">
        <span className="title">Weather forecast</span>
        <div className="input-container">
          <input
            type="text"
            name=""
            placeholder="Enter city"
            id=""
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={() => handleSearch(city, dispatch)}>Search</button>
        </div>
      </div>
      {weather && weather.dt && <span>{formatToDayMonthYear(weather.dt)}</span>}
      {weather && <span>,{weather.name}</span>}
      {weather && <WeatherDetails />}
      <button onClick={() => getCoord(setPosition)}>
        Get weather for Your Location
      </button>
    </div>
  );
}

export default Home;
