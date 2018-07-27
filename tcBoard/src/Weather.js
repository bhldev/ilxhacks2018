import * as React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Weather = ({
  weatherData,
}) => {

  if (!weatherData) {
    return <Label color="red">No weather information available</Label>;
  }

  const cloudCoverage = weatherData.clouds && weatherData.clouds.all;
  const rain = weatherData.rain && weatherData.rain && weatherData.rain['3h'];
  const temp = weatherData.main && weatherData.main.temp && (weatherData.main.temp - 273.15);
  const temperature = temp && Math.floor(temp * 100) / 100;
  const description = weatherData.weather && weatherData.weather && weatherData.weather[0] && weatherData.weather[0].description;
  const cloudLabel = cloudCoverage && (
    <Label color="grey">
      <Icon name="cloud" />
      {`${cloudCoverage}%`}
    </Label>
  );
  const tempLabel = temperature && (
    <Label color={(temperature > 0) ? "orange" : "blue"}>
      <Icon name="thermometer" />
      {`${temperature}°C`}
    </Label>
  );
  const rainLabel = rain && (
    <Label color="grey">
      <Icon name="rain" />
      {`${rain}mm`}
    </Label>
  );

  return (
    <div className="App-title">
      {description && <Label>{description}</Label>}
      {cloudLabel}
      {tempLabel}
      {rainLabel}
    </div>
  );
}

export default Weather;
