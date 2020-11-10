import React from "react";
import { connect } from "react-redux";
import Search from "./Search";
import { getWeatherData } from "../redux/SearchReducer";

class SearchContainer extends React.Component {
  render() {
    return (
      <div>
        <Search
          getInfoYourCity={this.props.getInfoYourCity}
          getWeatherData={this.props.getWeatherData}
          yourCity={this.props.yourCity}
          weatherData={this.props.weatherData}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    yourCity: state.searchPage.yourCity,
    weatherData: state.searchPage.weatherData,
  };
};

export default connect(mapStateToProps, { getWeatherData })(
  SearchContainer
);
