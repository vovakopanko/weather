import React from "react";
import { Steps } from 'antd';

let InfoSearch = (props) => {
    const { Step } = Steps;
  return (
    <div>
  <Steps direction="vertical" current={2}>
    <Step title="First act" description="Opend link `Search`" />
    <Step title="Second act" description="Enter your city in the search bar" />
    <Step title="Third act" description="Click button `Search`" />
    <Step title="Fourth act" description="Finish" />
  </Steps>
    </div>
  );
};

export default InfoSearch;
