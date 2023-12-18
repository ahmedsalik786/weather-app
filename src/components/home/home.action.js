import { weatherInstance } from "../../utils/axios";
import { fetchWeather } from "../../redux/weatherSlice";

export function getCoord(setPosition) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      console.log(position);
    },
    (error) => {
      console.log("error", error);
    }
  );
}

export function formatToDayMonthYear(timestamp) {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);

  const options = { weekday: "long", day: "numeric", month: "long" };
  return new Intl.DateTimeFormat("en-US", options).format(dateObject);
}

export const handleSearch = async (city, dispatch) => {
  try {
    const response = await weatherInstance.get(`/weather?q=${city},india`);
    dispatch(fetchWeather(response));
    // setWeatherData(response);
    console.log(response);
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
};

export async function getWeatherCoord(position, dispatch) {
  console.log(position);
  try {
    const response = await weatherInstance.get(
      `/weather?lat=${position.latitude}&lon=${position.longitude}`
    );
    console.log(response);
    dispatch(fetchWeather(response));
  } catch (error) {
    console.log("Error getting weather using coordinates: " + error);
  }
}

export function formatTimestamp(timestamp) {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);
  return dateObject.toLocaleString(); // Converts to local date and time format
}
