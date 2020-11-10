import { weatherInfo } from "../Api/Api";

const GET_YOURCITY = "redux/YourCityReducer/GET_YOURCITY";
const SET_WEATHERDATA = "redux/YourCityReducer/SET_WEATHERDATA";
const TOGGLE_IS_FETCHING = "redux/YourCityReducer/TOGGLE_IS_FETCHING";

let initialState = {
  yourCity: "Minsk",
  weatherData: [],
  isFeching: false,
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_YOURCITY:
      return {
        ...state,
        yourCity: action.yourCity,
      };
    case SET_WEATHERDATA:
      return {
        ...state,
        weatherData: action.data,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFeching: action.isFeching,
      };
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
});

export const toggleIsFetching = (isFeching) => ({
  type: TOGGLE_IS_FETCHING,
  isFeching,
});

export const getWeatherData = (yourCity) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(getInfoYourCity(yourCity))
    let list = await weatherInfo.getWeatherInfo(yourCity);
    dispatch(setWeatherData(list));
    dispatch(toggleIsFetching(false));
  };
};

export default SearchReducer;
