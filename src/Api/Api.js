import * as Axios from "axios";

export const instance = Axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});
let ApiKey = `&appid=f004c51d2159432ab3fe79f60c84e90e`;

export const weatherInfo = {
  getWeatherInfo(city) {
    debugger;
    return instance
      .get(`find?q=` + city + ApiKey)
      .then((Response) => Response.data.list[0]);
  },
};
