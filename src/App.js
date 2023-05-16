import React, { useState } from 'react';
import './style.css';
import TemperatureControl from './TemperatureControl';
import TemperatureDisplay from './TemperatureDisplay';

const App = () => {
  const [temperature, setTemperature] = useState(20);

  const incrementTemperature = () => {
    setTemperature((prevTemperature) => prevTemperature + 1);
  };

  const decrementTemperature = () => {
    setTemperature((prevTemperature) => prevTemperature - 1);
  };

  const getBackgroundColor = () => {
    if (temperature >= 50) {
      return 'red';
    } else if (temperature >= 30 && temperature < 50) {
      return 'orange';
    } else {
      return 'yellow';
    }
  };

  return (
    <div
      className="container"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <h1>Temperature Control App</h1>
      <TemperatureDisplay temperature={temperature} />
      <TemperatureControl
        temperature={temperature}
        incrementTemperature={incrementTemperature}
        decrementTemperature={decrementTemperature}
      />
    </div>
  );
};

export default App;
