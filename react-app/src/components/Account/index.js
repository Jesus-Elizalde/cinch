import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as CompanyIcon } from "../../static/svg/company.svg";
import { ReactComponent as EmployeesIcon } from "../../static/svg/employees.svg";

import "./Account.css";

const Account = () => {
  return (
    <div className="flex_row main_account_icon_container">
      <NavLink
        to="/account/company"
        className="flex_column account_icon_container"
      >
        <button>
          <CompanyIcon />
        </button>
        <div>Company profile</div>
        <div>Update information about your company</div>
      </NavLink>
      <NavLink
        to="/account/employees"
        className="flex_column account_icon_container"
      >
        <button>
          <EmployeesIcon />
        </button>
        <div>Employees</div>
        <div>Employees, roles and permissions</div>
      </NavLink>
      <NavLink
        to="/account/booklists"
        className="flex_column account_icon_container"
      >
        <button>
          <EmployeesIcon />
        </button>
        <div>My price book</div>
        <div>Manage your services and materials</div>
      </NavLink>
    </div>
  );
};

export default Account;
