import React from "react";
import { connect } from "react-redux";
import { getWeatherData } from "../redux/SearchReducer";
import YourWeather from "./YourWeather";
import { Spin } from "antd";
import style from "./YourWeather.module.css";

class YourWeatherContainer extends React.Component {
  componentDidMount() {
    this.props.getWeatherData(this.props.yourCity);
  }

  render() {
    return (
      <>
        {this.props.isFeching ? (
          <div className={style.example}>
            <Spin />
          </div>
        ) : (
          <div>
            <YourWeather
              weatherData={this.props.weatherData}
              yourCity={this.props.yourCity}
            />
          </div>
        )}
      </>
    );
  }
}
let mapStateToProps = (state) => ({
  yourCity: state.searchPage.yourCity,
  weatherData: state.searchPage.weatherData,
  isFeching: state.searchPage.isFeching,
});

export default connect(mapStateToProps, { getWeatherData })(
  YourWeatherContainer
);
