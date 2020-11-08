import React from "react";
import { Input} from "antd";
import { AudioOutlined} from "@ant-design/icons";

let Search = (props) => {
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  const onSearch = (value) => {
    props.getInfoYourCity(value);
    props.getWeatherData(value);
  };
  return (
    <div>
      <Search
        placeholder="Search your City/Town"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
      />
      <div><b>Belarus city:</b></div>
      <div>Minsk</div>
      <div>Vitebsk</div>
      <div>Gomel</div>
      <div>Grodno</div>
      <div>Brest</div>
      <div>Navapolatsk</div>
      <div>Polatsk</div>
    </div>
  );
};

export default Search;
