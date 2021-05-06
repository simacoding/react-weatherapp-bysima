import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <h1>Munich</h1>
          <ul>
            <li>Monday 11:00 am</li>
            <li>Cloudy</li>
          </ul>
          <br />
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>

        <div className="col-2">
          <div className="clearfix">
            <div className="float-left">
              <span className="temperature">6</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy"
              className="float-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
