import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./Job.css";

import { ReactComponent as ThreeDotsIcon } from "../../static/svg/threedots.svg";
import { ReactComponent as SearchIcon } from "../../static/svg/search.svg";
import { ReactComponent as SearchClearIcon } from "../../static/svg/searchclear.svg";
import { ReactComponent as MulitIcon } from "../../static/svg/mulit.svg";
import { ReactComponent as NewJobIcon } from "../../static/svg/newjob.svg";
import { ReactComponent as DeleteIcon } from "../../static/svg/delete.svg";
import SingleJob from "./SingleJob";
import { Modal } from "../Context/Modal";
import { deleteJobDetails } from "../../store/job";
import { getBusinessesDetails } from "../../store/business";

const Schedules = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const business = useSelector((state) => state.businesses[user?.business_id]);
  const allJobs = [];
  business?.customers.forEach((customer) => allJobs.push(...customer.jobs));
  const [filter, setFilter] = useState("");
  const [mulitbox, setMulitbox] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [checkedFromDate, setCheckedFromDate] = useState(true);
  const [checkedToDate, setCheckedToDate] = useState(true);
  const [checkedMessage, setCheckedMessage] = useState(true);
  const [checkedCustomer, setCheckCustomer] = useState(true);

  const [deleteArr, setDeleteArr] = useState([]);

  const checkboxState = { deleteArr, setDeleteArr };

  useEffect(() => {
    dispatch(getBusinessesDetails());
  }, [dispatch, showDeleteModal]);

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

  const deleteJobFnc = async () => {
    for (const id of deleteArr) {
      dispatch(deleteJobDetails(id));
    }
    setDeleteArr([]);
    setShowDeleteModal(false);
  };

  return (
    <div className="flex_column customer_main_container">
      {deleteArr.length ? (
        <div className="flex_row title_container">
          <h1>{deleteArr.length} selected</h1>
          <div className="flex_row title_right_side_conatiner">
            <div onClick={() => setShowDeleteModal(true)}>
              <DeleteIcon />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex_row title_container">
          <h1> {allJobs.length} jobs</h1>
          <div className="flex_row title_right_side_conatiner">
            <div className="flex_row main_input_container">
              <SearchIcon />
              <input
                value={filter}
                placeholder="Search"
                onChange={(e) => setFilter(e.target.value)}
                className="filter_input"
              />
              <div onClick={() => setFilter("")} className="clicker">
                <SearchClearIcon />
              </div>
            </div>
            <NavLink to="/jobs/new">
              <NewJobIcon />
            </NavLink>
            <div onClick={() => setMulitbox(true)} className="clicker">
              <MulitIcon />
            </div>
            {/* <div>
              <ThreeDotsIcon />
            </div> */}
          </div>
        </div>
      )}

      <div className="all_customers_table_container">
        <table>
          <thead>
            <tr>
              <input
                type="checkbox"
                value={deleteArr.length !== 0}
                onClick={addAllJob}
              />
              {checkedCustomer && <th>Customer</th>}
              {checkedFromDate && <th>From Date and Time</th>}
              {checkedToDate && <th>To Date and Time</th>}
              {checkedMessage && <th>Message</th>}
            </tr>
          </thead>
          <tbody>
            {allJobs.reverse().map((job) => (
              <SingleJob
                states={states}
                job={job}
                checkboxState={checkboxState}
                business={business}
              />
            ))}
          </tbody>
        </table>
      </div>
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
            <button onClick={() => setMulitbox(false)}>Exit</button>
          </div>
        </Modal>
      )}
      {showDeleteModal && (
        <Modal onClose={() => setShowDeleteModal(false)}>
          <div className="flex_column">
            <h1>Delete job?</h1>
            <p>Are you sure? All selected jobs will be deleted.</p>
            <div>
              <button onClick={deleteJobFnc}>Delete</button>
              <button onClick={() => setShowDeleteModal(false)}>Cancel</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Schedules;
