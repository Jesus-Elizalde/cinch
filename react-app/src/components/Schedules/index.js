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
import SingleJob from "./SingleJob";

const Schedules = () => {
  const user = useSelector((state) => state.session.user);
  const business = useSelector((state) => state.businesses[user?.business_id]);
  const allJobs = [];
  business?.customers.forEach((customer) => allJobs.push(...customer.jobs));
  const [filter, setFilter] = useState("");
  const [mulitbox, setMulitbox] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const [checkedFromDate, setCheckedFromDate] = useState(true);
  const [checkedToDate, setCheckedToDate] = useState(true);
  const [checkedMessage, setCheckedMessage] = useState(true);
  const [checkedCustomer, setCheckCustomer] = useState(true);

  const [deleteArr, setDeleteArr] = useState([]);
  console.log(
    "🚀 ~ file: index.js ~ line 30 ~ Schedules ~ deleteArr",
    deleteArr
  );

  const checkboxState = { deleteArr, setDeleteArr };

  const states = {
    checkedFromDate,
    checkedToDate,
    checkedMessage,
    checkedCustomer,
  };

  const addAllJob = (e) => {
    if (e.target.checked) {
      const arr = [];
      allJobs.forEach((job) => arr.push(job.id));
      setDeleteArr(arr);
    } else {
      setDeleteArr([]);
    }
  };

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
      <table>
        <thead>
          <tr>
            <input
              type="checkbox"
              value={deleteArr.length !== 0}
              onClick={addAllJob}
            />
            {checkedCustomer && <th>customer</th>}
            {checkedFromDate && <th>from_date_time</th>}
            {checkedToDate && <th>to_date_time</th>}
            {checkedMessage && <th>message</th>}
          </tr>
        </thead>
        <tbody>
          {allJobs.map((job) => (
            <SingleJob
              states={states}
              job={job}
              checkboxState={checkboxState}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedules;
