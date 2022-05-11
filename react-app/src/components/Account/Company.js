import React from "react";

import "./Company.css";

const Company = () => {
  return (
    <div className="company_container">
      <div className="company_inner_container flex_column">
        <div className="flex_row">Company Name</div>
        <div className="flex_row">
          <p>company address</p>
          <p>website url</p>
          <p>Email</p>
        </div>
        <div className="flex_row">
          <p>number</p>
          <p>License</p>
        </div>
        <div className="flex_row"></div>
      </div>
    </div>
  );
};

export default Company;
