import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../redux/weatherSlice";
import { weatherInstance } from "../../utils/axios";

export const withWeatherData = (WrappedComponent) => {
  return function WeatherDataWrapper(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await weatherInstance.get(
            `/weather?lat=${props.latitude}&lon=${props.longitude}`
          );
          dispatch(fetchWeather(response));
        } catch (error) {
          console.error("Error fetching weather:", error);
        }
      };

      if (props.latitude && props.longitude) {
        fetchData();
      }
    }, [props.latitude, props.longitude, dispatch]);

    return <WrappedComponent {...props} />;
  };
};
