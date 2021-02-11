import React, { useState } from 'react';
import './app.css';
import { format } from 'date-fns';

const api = {
  key: 'b0efe734dc993b0dff6b54afef00d5bb',
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api.key}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
          console.log(data);
        });
    }
  };

  return (
    <div
      className={
        typeof weather.main != 'undefined'
          ? weather.main.temp > 16
            ? 'app warm'
            : 'app'
          : 'app'
      }
    >
      <main>
        <div className="search-box">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            className="search-bar"
            placeholder="Search..."
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != 'undefined' ? (
          <>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">
                {format(new Date(), 'EEE do MMM yyyy')}
              </div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp - 273.15) + '°C'}
              </div>
              <div className="weather">{weather.weather[0].description}</div>
            </div>
          </>
        ) : (
          <div className="enter_location"> Enter a location</div>
        )}
      </main>
    </div>
  );
}

export default App;
