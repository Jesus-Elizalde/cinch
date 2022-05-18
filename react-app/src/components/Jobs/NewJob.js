import React, { useState } from "react";
import { useSelector } from "react-redux";

// import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ReactComponent as XIcon } from "../../static/svg/xicon.svg";
import { ReactComponent as AddCustomerIcon } from "../../static/svg/addcustomer.svg";
import { ReactComponent as SearchIcon } from "../../static/svg/search.svg";
import { ReactComponent as ScheduleIcon } from "../../static/svg/blackschedule.svg";

import "./NewJob.css";
import NotSelectedCustomer from "./NotSelectedCustomer";

import SelectedCustomer from "./SelectedCustomer";

const NewJob = () => {
  const user = useSelector((state) => state.session.user);
  const business = useSelector((state) => state.businesses[user?.business_id]);

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [message, setMessage] = useState("");
  const [searchCustomer, setSearchCustomer] = useState("");
  console.log(
    "🚀 ~ file: NewJob.js ~ line 25 ~ NewJob ~ searchCustomer",
    searchCustomer
  );

  const [selectedCustomer, setSelectedCustomer] = useState("");
  console.log(
    "🚀 ~ file: NewJob.js ~ line 31 ~ NewJob ~ selectedCustomer",
    selectedCustomer
  );

  return (
    <div className="flex_column new_job_main">
      <div className="flex_row new_job_main_banner">
        <div className="flex_row align_item">
          <div>
            <XIcon />
          </div>
          <h2>New job</h2>
        </div>
        <div>
          <button>Save Job</button>
        </div>
      </div>
      <div className="flex_row">
        <div className="flex_column">
          {!selectedCustomer ? (
            <NotSelectedCustomer
              searchCustomer={searchCustomer}
              setSearchCustomer={setSearchCustomer}
              business={business}
              setSelectedCustomer={setSelectedCustomer}
            />
          ) : (
            <SelectedCustomer
              setSelectedCustomer={setSelectedCustomer}
              selectedCustomer={selectedCustomer}
            />
          )}

          <div className="flex_column new_job_schedule_box">
            <div className="flex_row align_item new_job_schedule_container">
              <ScheduleIcon />
              <h3>Schedule</h3>
            </div>
            <div className="flex_row align_item">
              <p>From</p>
              <DatePicker
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
                selectsStart
                startDate={fromDate}
                endDate={toDate}
              />
            </div>
            <div className="flex_row align_item">
              <p>To</p>
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
                selectsEnd
                startDate={fromDate}
                endDate={toDate}
                minDate={fromDate}
              />
            </div>
          </div>
        </div>
        <div className="flex_column"></div>
      </div>
    </div>
  );
};

export default NewJob;
