import React from "react";
import style from "./Search.module.css";
import { Input } from "antd";
import { NavLink } from "react-router-dom";
import { Row, Col, Divider } from 'antd';
// import { Field, reduxForm } from "redux-form";

let Search = (props) => {
  const { Search } = Input;

  const onSearch = (value) => {
    props.getInfoYourCity(value);
    props.getWeatherData(value);
  };

  // const onSearchCity = (value) => {
  //   alert(value.NewCityWeather);
  //   props.getInfoYourCity(value.NewCityWeather);
  //   props.getWeatherData(value.NewCityWeather);
  // }
  return (
    <div>
      {/* <SearchInfoData onSubmit={onSearchCity}/> */}
      <Search
          placeholder="Search your City/Town"
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      <Divider orientation="left">Popular queries:</Divider>
      <Row>
        <Col flex={2}>
          <div>
            <b>Belarus city:</b>
          </div>
          <NavLink
            className={style.link}
            to="/yourweather"
            onClick={() => onSearch("Minsk")}
          >
            <div className="cityname">Minsk</div>
          </NavLink>
          <NavLink
            className={style.link}
            to="/yourweather"
            onClick={() => onSearch("Vitebsk")}
          >
            <div>Vitebsk</div>
          </NavLink>
          <NavLink
            className={style.link}
            to="/yourweather"
            onClick={() => onSearch("Gomel")}
          >
            <div>Gomel</div>
          </NavLink>
          <NavLink
            className={style.link}
            to="/yourweather"
            onClick={() => onSearch("Grodno")}
          >
            <div>Grodno</div>
          </NavLink>
          <NavLink
            className={style.link}
            to="/yourweather"
            onClick={() => onSearch("Brest")}
          >
            <div>Brest</div>
          </NavLink>
          <NavLink
            className={style.link}
            to="/yourweather"
            onClick={() => onSearch("Navapolatsk")}
          >
            <div>Navapolatsk</div>
          </NavLink>
          <NavLink
            className={style.link}
            to="/yourweather"
            onClick={() => onSearch("Polatsk")}
          >
            <div>Polatsk</div>
          </NavLink>
          <NavLink
            className={style.link}
            to="/yourweather"
            onClick={() => onSearch("Polatsk")}
          >
            <div>Dzisna</div>
          </NavLink>
        </Col>
        <Col flex={2}>
          <div>
            <b>Ukraine city:</b>
          </div>
          <NavLink
            className={style.link}
            to="/yourweather"
            onClick={() => onSearch("Kiev")}
          >
            <div className="cityname">Kiev</div>
          </NavLink>
        </Col>
        <Col flex={2}>
          <div>
            <b>Russian city:</b>
          </div>
          <NavLink
            className={style.link}
            to="/yourweather"
            onClick={() => onSearch("Moscow")}
          >
            <div className="cityname">Moscow</div>
          </NavLink>
          <NavLink
            className={style.link}
            to="/yourweather"
            onClick={() => onSearch("Sochi")}
          >
            <div>Sochi</div>
          </NavLink>
        </Col>
      </Row>
    </div>
  );
};

// const SearchInfoCity = (props) => {
//   return (
//       <form onSubmit={props.handleSubmit}>
//           <Field
//             placeholder="Search your City/Town ..."
//             component={"input"}
//             name={"NewCityWeather"}
//           />
//           <NavLink to="yourweather">
//           <button>Hi</button>
//           </NavLink>
//       </form>
//   );
// };

// const SearchInfoData = reduxForm({form: "getCityInformation"})(SearchInfoCity);


export default Search;