import React from "react";
import { connect } from "react-redux";
import { getWeatherData } from "../redux/SearchReducer";
import YourWeather from "./YourWeather";

class YourWeatherContainer extends React.Component {
  componentDidMount() {
    this.props.getWeatherData(this.props.yourCity);
  }

  render() {
    return (
      <div>
        <YourWeather
          weatherData={this.props.weatherData}
          yourCity={this.props.yourCity}
        />
      </div>
    );
  }
}
let mapStateToProps = (state) => ({
  yourCity: state.searchPage.yourCity,
  weatherData: state.searchPage.weatherData,
});

export default connect(mapStateToProps, { getWeatherData })(
  YourWeatherContainer
);
