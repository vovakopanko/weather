import React from "react";
import { Steps } from 'antd';

let InfoSearch = (props) => {
    const { Step } = Steps;
  return (
    <div>
  <Steps direction="vertical" current={0}>
    <Step title="First act" description="Opend link `Search your weather:`" />
    <Step title="Second act" description="Enter your city in the search bar or choose in list popular request" />
    <Step title="Third act" description="Click button `Search` or Click name popular city" />
    <Step title="Fourth act" description="Finish" />
  </Steps>
    </div>
  );
};

export default InfoSearch;
