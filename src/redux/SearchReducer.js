import { weatherInfo } from "../Api/Api";


const GET_YOURCITY = "redux/YourCityReducer/GET_YOURCITY";
const SET_WEATHERDATA = "redux/YourCityReducer/SET_WEATHERDATA"

let initialState = {
  yourCity: null,
  weatherData: [],
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_YOURCITY:
      return {
        ...state,
        yourCity: action.yourCity,
      };
      case SET_WEATHERDATA:
        return{
          ...state,
          weatherData: action.data
        }
    default:
      return state;
  }
};

export const getInfoYourCity = (yourCity) => ({
  type: GET_YOURCITY,
  yourCity,
});

export const setWeatherData = (data) => ({
  type: SET_WEATHERDATA,
  data,
})


export const getWeatherData = (yourCity) => {
  return async (dispatch) => {
    let list = await weatherInfo.getWeatherInfo(yourCity);
    dispatch(setWeatherData(list));
  }
}

export default SearchReducer;
