import React, { useState } from 'react';
import './App.css';
import Weather from './Weather';
import Search from './Search';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [weatherCondition, setWeatherCondition] = useState('');

  const handleSearch = async (city) => {
    if (!city) return;

    const apiKey = '07880e59fb4ed5c50f8587e8ddb26f7e';  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === '404') {
        alert('City not found!');
      } else {
        setWeatherData(data);
        setWeatherCondition(data.weather[0].main.toLowerCase());
      }
    } catch (error) {
      console.error('Error fetching the weather data:', error);
    }
  };

  return (
    <div className={`App ${weatherCondition}`}>
      <h1>Weather App</h1>
      <Search onSearch={handleSearch} />
      {weatherData ? (
        <Weather data={weatherData} />
      ) : (
        <p>Search for a city to see the weather.</p>
      )}
    </div>
  );
}

export default App;
