import React from 'react';

const Weather = ({ data }) => {
  const { main, weather, wind } = data;

  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <p>{weather[0].description}</p>
      <h3>{main.temp}°C</h3>
      <div className="weather-details">
        <p><strong>Humidity:</strong> {main.humidity}%</p>
        <p><strong>Wind:</strong> {wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default Weather;
