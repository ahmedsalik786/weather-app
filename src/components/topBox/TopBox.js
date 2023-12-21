import React from "react";
import haze from "../../asset/haze.png";
import partltSunny from "../../asset/partly-sunny.jpeg";
import rainy from "../../asset/rainy.png";
import cloudy from "../../asset/cloudy.jpg";
import Smoke from "../../asset/smoky.webp";
import mist from "../../asset/mist.png";
import clear from "../../asset/clear.jpg";

import { useSelector } from "react-redux";
import "./topBox.style.css";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import Sun from "@mui/icons-material/WbSunny";
import { formatTimestamp, kelvinToCelsius } from "./topBox.action";

function TopBox() {
  const { data: weather } = useSelector((state) => state.weather);
  console.log("topBox", weather);
  return (
    <>
      <div className="top-box">
        <div>
          <div className="temp main">
            <img
              style={{ height: "50px" }}
              src={
                weather?.weather[0]?.main === "Haze"
                  ? haze
                  : weather?.weather[0]?.main === "Clouds"
                  ? cloudy
                  : weather?.weather[0]?.main === "Mist"
                  ? mist
                  : weather?.weather[0]?.main === "partlySunny"
                  ? partltSunny
                  : weather?.weather[0]?.main === "Clear"
                  ? clear
                  : weather?.weather[0]?.main === "Smoke"
                  ? Smoke
                  : weather?.weather[0]?.main === "Smoke"
              }
              alt="Weather Icon"
            />
            <div className="temp-box-left main-temp">
              {kelvinToCelsius(weather.main.temp)}°C
            </div>
            <div className="temp-box-right">
              <span style={{ fontWeight: "500", color: "gray" }}>
                {kelvinToCelsius(weather.main.temp_max)}°C High
              </span>
              <span style={{ fontWeight: "500", color: "gray" }}>
                {kelvinToCelsius(weather.main.temp_min)}°C Low
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="temp">
            <div className="temp-box-left">
              <DeviceThermostatOutlinedIcon />
            </div>
            <div className="temp-box-right">
              {" "}
              <span>
                {"  "}
                {kelvinToCelsius(weather.main.feels_like)}°C
                <span style={{ fontWeight: "500", color: "gray" }}>
                  Feels like
                </span>
              </span>
              <span>{weather.weather.main}</span>
            </div>
          </div>
        </div>

        <div>
          <div className="temp">
            <div className="temp-box-left">
              <Sun />
            </div>
            <div className="temp-box-right">
              {" "}
              <span>
                <span style={{ fontWeight: "500", color: "gray" }}>
                  {" "}
                  sunrise{" "}
                </span>
                {formatTimestamp(weather.sys.sunrise)}
              </span>
              <span style={{ fontWeight: "500", color: "gray" }}>
                as 24hr format IST
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="temp">
            <div className="temp-box-left">
              <Sun />
            </div>
            <div className="temp-box-right">
              {" "}
              <span>
                <span style={{ fontWeight: "500", color: "gray" }}>
                  {" "}
                  sunset{" "}
                </span>
                {formatTimestamp(weather.sys.sunset)}
              </span>
              <span style={{ fontWeight: "500", color: "gray" }}>
                as 24hr format IST
              </span>
            </div>
          </div>
        </div>
      </div>
      <p>Description:{weather?.weather[0]?.main}</p>
    </>
  );
}

export default TopBox;
