import React from "react";

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         Reallytime: new Date().toLocaleString() 
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => this.intervalOneSeconds(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  intervalOneSeconds() {
    this.setState({
        Reallytime: new Date().toLocaleString(),
    });
  }
  render() {
    return <span>{this.state.Reallytime}</span>;
  }
}
