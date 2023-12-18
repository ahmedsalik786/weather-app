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

  // useEffect(() => {
  //   handleSearch();
  // }, []);

  useEffect(() => {
    getWeatherCoord(position, dispatch);
  }, [position]);

  // async function getWeatherCoord(position) {
  //   console.log(position);
  //   try {
  //     const response = await weatherInstance.get(
  //       `/weather?lat=${position.latitude}&lon=${position.longitude}`
  //     );
  //     dispatch(fetchWeather(response));
  //   } catch (error) {
  //     console.log("Error getting weather using coordinates: " + error);
  //   }
  // }

  // const handleSearch = async (city, dispatch) => {
  //   try {
  //     const response = await weatherInstance.get(`/weather?q=${city},india`);
  //     dispatch(fetchWeather(response));
  //     // setWeatherData(response);
  //     console.log(response);
  //   } catch (error) {
  //     console.error("Error fetching weather:", error);
  //     throw error;
  //   }
  // };

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
      {weather && <span>{formatToDayMonthYear(weather.dt)}</span>}
      {weather && <span>,{weather.name}</span>}
      {weather && <WeatherDetails />}
      <button onClick={() => getCoord(setPosition)}>
        Get weather for Your Location
      </button>
    </div>
  );
}

export default Home;
