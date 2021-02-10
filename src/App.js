import React from 'react';
import './app.css';
import { format } from 'date-fns';

const api = {
  key: '2e44188ae7e877bf4fe23dac83d52bae',
  base: 'https://api.openweathermap.org/data/2.5',
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="location-box">
          <div className="location">New York City, US</div>
          <div className="date">{format(new Date(), 'EEE do MMM yyyy')}</div>
        </div>
        <div className="weather-box">
          <div className="temp">15&deg;</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
