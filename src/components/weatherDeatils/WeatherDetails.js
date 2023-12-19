import React, { useState } from "react";
import "./weatherDeatils.style.css";
import GridContainer from "../gridContainer/GridContainer";
import TopBox from "../topBox/TopBox";
import { useSelector } from "react-redux";

function WeatherDetails() {
  const { data: weather } = useSelector((state) => state.weather);
  console.log(weather);

  return (
    <>
      <div className="body-container">
        {weather && (
          <div className="topBox">
            <TopBox />
          </div>
        )}
        <div className="mid">
          <span>Longitude:{weather?.coord?.lon}</span>{" "}
          <span>Latitude:{weather?.coord?.lat}</span>
        </div>

        <div className="buttom-box">
          <GridContainer />
        </div>
      </div>
    </>
  );
}

export default WeatherDetails;
