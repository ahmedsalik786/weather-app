export function kelvinToCelsius(temp) {
  return (temp - 273.15).toFixed(1);
}

export function formatTimestamp(timestamp) {
  // Convert Unix timestamp to milliseconds
  const milliseconds = timestamp * 1000;

  // Create a new Date object using the milliseconds
  const dateObject = new Date(milliseconds);

  // Get the hours, minutes, and seconds
  const hours = dateObject.getHours();
  const minutes = "0" + dateObject.getMinutes(); // Add leading zero if needed
  const seconds = "0" + dateObject.getSeconds(); // Add leading zero if needed

  // Format the time as HH:MM:SS
  const formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return formattedTime;
}
