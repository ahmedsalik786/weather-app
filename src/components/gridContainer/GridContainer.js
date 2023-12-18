// /**
//  * The AutoGrid component displays weather information using icons and data from the Redux store.
//  * @returns The AutoGrid component is returning a grid layout with weather information. It displays
//  * icons and corresponding weather data such as wind speed, humidity, visibility, precipitation,
//  * clouds, and pressure. The weather data is obtained from the Redux store using the useSelector hook.
//  */
// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
// import AirRoundedIcon from "@mui/icons-material/AirRounded";
// import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
// import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
// import Precipation from "@mui/icons-material/StormOutlined";
// import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
// import Pressure from "@mui/icons-material/CompressRounded";
// import "./grid.style.css";
// import { useSelector } from "react-redux";

// export default function AutoGrid() {
//   const { data: weather } = useSelector((state) => state.weather);
//   console.log(weather);
//   return (
//     <>
//       {
//         <div className="grid-conatiner">
//           <div id="box">
//             <div className="left">
//               <AirRoundedIcon />
//             </div>
//             <div className="right">
//               <span className="wind">{weather.wind.speed}</span>
//               <span style={{ fontWeight: "500", color: "gray" }}>wind</span>
//             </div>
//           </div>
//           <div id="box">
//             <div className="left">
//               <WaterDropRoundedIcon />
//             </div>
//             <div className="right">
//               <span className="wind">{weather.main.humidity}</span>
//               <span style={{ fontWeight: "500", color: "gray" }}>humidity</span>
//             </div>
//           </div>
//           <div id="box">
//             <div className="left">
//               <VisibilityOffRoundedIcon />
//             </div>
//             <div className="right">
//               <span className="wind">{weather.visibility}</span>
//               <span style={{ fontWeight: "500", color: "gray" }}>
//                 visibility
//               </span>
//             </div>
//           </div>
//           <div id="box">
//             <div className="left">
//               <Precipation />
//             </div>
//             <div className="right">
//               <span className="wind">{weather.visibility}</span>
//               <span style={{ fontWeight: "500", color: "gray" }}>
//                 visibility
//               </span>
//             </div>
//           </div>
//           <div id="box">
//             <div className="left">
//               <CloudOutlinedIcon />
//             </div>
//             <div className="right">
//               <span className="wind">{weather.clouds.all}</span>
//               <span style={{ fontWeight: "500", color: "gray" }}>clouds</span>
//             </div>
//           </div>
//           <div id="box">
//             <div className="left">
//               <Pressure />
//             </div>
//             <div className="right">
//               <span className="wind">{weather.main.pressure}</span>
//               <span style={{ fontWeight: "500", color: "gray" }}>pressure</span>
//             </div>
//           </div>
//         </div>
//       }
//     </>
//   );
// }

import * as React from "react";
import { useSelector } from "react-redux";
import AirRoundedIcon from "@mui/icons-material/AirRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import StormOutlinedIcon from "@mui/icons-material/StormOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import CompressRoundedIcon from "@mui/icons-material/CompressRounded";
import "./grid.style.css";

export default function AutoGrid() {
  const { data: weather } = useSelector((state) => state.weather);

  return (
    <div className="grid-container">
      <div className="grid-item">
        <div className="icon">
          <AirRoundedIcon />
        </div>
        <span className="data">{weather.wind.speed}</span>
        <span className="label">Wind</span>
      </div>
      <div className="grid-item">
        <div className="icon">
          <WaterDropRoundedIcon />
        </div>
        <span className="data">{weather.main.humidity}</span>
        <span className="label">Humidity</span>
      </div>
      <div className="grid-item">
        <div className="icon">
          <VisibilityOffRoundedIcon />
        </div>
        <span className="data">{weather.visibility}</span>
        <span className="label">Visibility</span>
      </div>
      <div className="grid-item">
        <div className="icon">
          <StormOutlinedIcon />
        </div>
        <span className="data">{weather.visibility}</span>
        <span className="label">Precipitation</span>
      </div>
      <div className="grid-item">
        <div className="icon">
          <CloudOutlinedIcon />
        </div>
        <span className="data">{weather.clouds.all}</span>
        <span className="label">Clouds</span>
      </div>
      <div className="grid-item">
        <div className="icon">
          <CompressRoundedIcon />
        </div>
        <span className="data">{weather.main.pressure}</span>
        <span className="label">Pressure</span>
      </div>
    </div>
  );
}
