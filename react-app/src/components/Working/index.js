import React from "react";

import { ReactComponent as LogoIcon } from "../../static/svg/cinchlogo.svg";

import "./Working.css";
const WorkingInProgress = () => {
  return (
    <div className="main_working_body">
      <LogoIcon />
      <h1>Work in Progress</h1>
      <h2>Come back soon...</h2>
    </div>
  );
};

export default WorkingInProgress;
