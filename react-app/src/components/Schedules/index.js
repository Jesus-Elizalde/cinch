import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

import "./Job.css";

import { ReactComponent as AddCustomerIcon } from "../../static/svg/addcustomer.svg";
import { ReactComponent as ThreeDotsIcon } from "../../static/svg/threedots.svg";
import { ReactComponent as SearchIcon } from "../../static/svg/search.svg";
import { ReactComponent as SearchClearIcon } from "../../static/svg/searchclear.svg";
import { ReactComponent as MulitIcon } from "../../static/svg/mulit.svg";
import { ReactComponent as DeleteIcon } from "../../static/svg/delete.svg";

const Schedules = () => {
  const user = useSelector((state) => state.session.user);
  const business = useSelector((state) => state.businesses[user?.business_id]);
  const allJobs = [];
  business?.customers.forEach((customer) => allJobs.push(...customer.jobs));
  const [filter, setFilter] = useState("");
  const [mulitbox, setMulitbox] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="flex_column customer_main_container">
      <div className="flex_row title_container">
        <h1> {allJobs.length} Jobs</h1>
        <div className="flex_row title_right_side_conatiner">
          <div className="flex_row main_input_container">
            <SearchIcon />
            <input
              value={filter}
              placeholder="Search"
              onChange={(e) => setFilter(e.target.value)}
              className="filter_input"
            />
            <div onClick={() => setFilter("")}>
              <SearchClearIcon />
            </div>
          </div>
          <NavLink to="/jobs/new">
            <AddCustomerIcon />
          </NavLink>
          <div onClick={() => setMulitbox(true)}>
            <MulitIcon />
          </div>
          <div>
            <ThreeDotsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedules;
