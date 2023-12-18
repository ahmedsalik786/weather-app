import React from "react";
import img from "../../asset/sun_rain_Icon.jpg";
import { useSelector } from "react-redux";
import "./topBox.style.css";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import Sun from "@mui/icons-material/WbSunny";
import { formatTimestamp, kelvinToCelsius } from "./topBox.action";

function TopBox() {
  const { data: weather } = useSelector((state) => state.weather);
  return (
    <>
      <div className="top-box">
        <div>
          <div className="temp main">
            <img style={{ height: "50px" }} src={img} alt="Weather Icon" />
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
              {/* <span>{weather.weather.main}</span> */}
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
      {/* <p>Description:{weather.weather.main}</p> */}
    </>
  );
}

export default TopBox;
