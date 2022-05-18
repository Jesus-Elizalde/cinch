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
import { Modal } from "../Context/Modal";

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
      {mulitbox && (
        <Modal onClose={() => setMulitbox(false)}>
          <div className="modal_container">
            <h1>Select columns to view</h1>
            <div className="flex_row">
              <div className="flex_column mulit_inner_container">
                <div className="flex_row">
                  <input
                    value={checkedCustomer}
                    checked={checkedCustomer}
                    type="checkbox"
                    onChange={(e) => setCheckCustomer(e.target.checked)}
                  />
                  <p>Customer</p>
                </div>
                <div className="flex_row">
                  <input
                    value={checkedFromDate}
                    checked={checkedFromDate}
                    type="checkbox"
                    onChange={(e) => setCheckedFromDate(e.target.checked)}
                  />
                  <p>checkedFromDate</p>
                </div>
                <div className="flex_row">
                  <input
                    value={checkedToDate}
                    checked={checkedToDate}
                    type="checkbox"
                    onChange={(e) => setCheckedToDate(e.target.checked)}
                  />
                  <p>checkedToDate</p>
                </div>
                <div className="flex_row">
                  <input
                    value={checkedMessage}
                    checked={checkedMessage}
                    type="checkbox"
                    onChange={(e) => setCheckedMessage(e.target.checked)}
                  />
                  <p>checkedMessage</p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Schedules;
