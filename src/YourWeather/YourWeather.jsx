import React from "react";
import { Row, Col } from "antd";
import style from "./YourWeather.module.css";

let YourWeather = ({ weatherData, yourCity }) => {
  return (
    <div>
      <Row gutter={24}>
        <Col span={8}></Col>
        <Col className={style.border} span={8}>
          <div>
            {yourCity} [{weatherData.sys.country}]
          </div>
          <img
            src={
              "http://openweathermap.org/img/w/" +
              weatherData.weather[0].icon +
              ".png"
            }
            alt="iconweather"
            width="120px"
            height="120px"
          />
          <div>
            Clouds: <b>{weatherData.clouds.all} %</b>
          </div>
          <div>
            Coordination:
            <div>
              LAT - <b>{weatherData.coord.lat}</b>
            </div>
            <div>
              LON - <b>{weatherData.coord.lon}</b>
            </div>
          </div>
          <div></div>
          <div>
            Temp Maximal:{" "}
            <b>{Math.round(weatherData.main.temp_max - 273)} °C</b>{" "}
          </div>
          <div>
            Temp Minimal:{" "}
            <b>{Math.round(weatherData.main.temp_min - 273)} °C</b>
          </div>
          <div>
            Description: <b>{weatherData.weather[0].description}</b>
          </div>
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
};

export default YourWeather;
