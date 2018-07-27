import * as React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Weather = ({
  weatherData = mockData,
}) => {

  if (!weatherData) {
    return <Label color="red">No weather information available</Label>;
  }

  const cloudCoverage = weatherData.clouds && weatherData.clouds.all;
  const rain = weatherData.rain && weatherData.rain && weatherData.rain['3h'];
  const temp = weatherData.main && weatherData.main.temp && ((weatherData.main.temp - 32)*(5/9));
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



const mockData = {
    "coord": {
        "lon": -0.13,
        "lat": 51.51
    },
    "weather": [
        {
            "id": 300,
            "main": "Drizzle",
            "description": "light intensity drizzle",
            "icon": "09d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 280.32,
        "pressure": 1012,
        "humidity": 81,
        "temp_min": 279.15,
        "temp_max": 281.15
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.1,
        "deg": 80
    },
    "clouds": {
        "all": 90
    },
    "dt": 1485789600,
    "sys": {
        "type": 1,
        "id": 5091,
        "message": 0.0103,
        "country": "GB",
        "sunrise": 1485762037,
        "sunset": 1485794875
    },
    "id": 2643743,
    "name": "London",
    "cod": 200
}