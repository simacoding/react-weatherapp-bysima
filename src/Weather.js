import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      date: new Date(response.data.dt * 1000),
    });
    console.log(response.data);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-8">
              <input
                type="Search"
                placeholder="Enter city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="Submit" value="Search" className="button" />
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col-6">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <li>{weatherData.description}</li>
            </ul>
            <br />
            <ul>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>

          <div className="col-2">
            <div className="clearfix">
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt="cloudy"
                className="float-left"
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "641aea60f164eb7376c34eaed6daea65";
    let city = props.defaultCity;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
