import React from 'react';

const TemperatureControl = ({
  temperature,
  incrementTemperature,
  decrementTemperature,
}) => {
  return (
    <div className="temperature-controls">
      <button onClick={decrementTemperature}>Decrease</button>
      <button onClick={incrementTemperature}>Increase</button>
    </div>
  );
};

export default TemperatureControl;
