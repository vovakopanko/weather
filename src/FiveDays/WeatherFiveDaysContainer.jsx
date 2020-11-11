import React from "react";
import { connect } from "react-redux";
import WeatherFiveDays from "./WeatherFiveDays";

class WeatherFiveDaysContainer extends React.Component {

  render() {
    return (
      <>
      <WeatherFiveDays/>
      </>
    );
  }
}
let mapStateToProps = (state) => ({
  
});

export default connect(mapStateToProps, {})(
  WeatherFiveDaysContainer
);
