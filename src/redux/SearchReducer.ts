import { weatherInfo } from "../Api/Api";

const GET_YOURCITY = "redux/YourCityReducer/GET_YOURCITY";
const SET_WEATHERDATA = "redux/YourCityReducer/SET_WEATHERDATA";
const TOGGLE_IS_FETCHING = "redux/YourCityReducer/TOGGLE_IS_FETCHING";

type initialStateType = {
  yourCity: string | null;
  weatherData: Array<any> | null;
  isFeching: boolean | null;
};

let initialState: initialStateType = {
  yourCity: "Minsk",
  weatherData: [],
  isFeching: false,
};

const SearchReducer = (state = initialState, action: any):initialStateType => {
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

type GetInfoYourCityType = {
  type: typeof GET_YOURCITY;
  yourCity: string;
};

export const getInfoYourCity = (yourCity: string): GetInfoYourCityType => ({
  type: GET_YOURCITY,
  yourCity,
});

type SetWeatherDataType = {
  type: typeof SET_WEATHERDATA;
  data: any;
};

export const setWeatherData = (data: any): SetWeatherDataType => ({
  type: SET_WEATHERDATA,
  data,
});

type ToggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFeching: boolean;
};

export const toggleIsFetching = (isFeching: boolean): ToggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFeching,
});

export const getWeatherData = (yourCity: string) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    dispatch(getInfoYourCity(yourCity));
    let list = await weatherInfo.getWeatherInfo(yourCity);
    dispatch(setWeatherData(list));
    dispatch(toggleIsFetching(false));
  };
};

export default SearchReducer;
