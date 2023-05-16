import React from 'react';

const TemperatureDisplay = ({ temperature }) => {
  return (
    <div className="temperature-display">
      <h2>Temperature: {temperature}°C</h2>
    </div>
  );
};

export default TemperatureDisplay;
