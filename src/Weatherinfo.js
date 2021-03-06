import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {" "}
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <br />
      <div className="row mt-8">
        <div className="col-5">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>

        <div className="col-2">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} color="#a1906b" />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="float-left">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
