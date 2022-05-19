import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal } from "../Context/Modal";

// import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ReactComponent as XIcon } from "../../static/svg/xicon.svg";
import { ReactComponent as ScheduleIcon } from "../../static/svg/blackschedule.svg";

import "./NewJob.css";
import NotSelectedCustomer from "./NotSelectedCustomer";

import SelectedCustomer from "./SelectedCustomer";
import { newJobDetails } from "../../store/job";
import AddServiceModal from "./AddServiceModal";

const NewJob = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const business = useSelector((state) => state.businesses[user?.business_id]);

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [message, setMessage] = useState("");
  const [searchCustomer, setSearchCustomer] = useState("");

  const [selectedCustomer, setSelectedCustomer] = useState("");

  const [errors, setErrors] = useState([]);

  const [showServiceModal, setShowServiceModal] = useState(false);

  const onSubmit = async () => {
    const results = {
      message,
      from_date_time: fromDate,
      to_date_time: toDate,
      customer_id: selectedCustomer?.id,
    };

    const data = await dispatch(newJobDetails(results));
    if (data) {
      setErrors(data);
      return;
    }
    setErrors([]);
  };

  return (
    <div className="flex_column new_job_main">
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className="flex_row new_job_main_banner">
        <div className="flex_row align_item">
          <div>
            <XIcon />
          </div>
          <h2>New job</h2>
        </div>
        <div>
          <button onClick={onSubmit}>Save Job</button>
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
        <div className="flex_column">
          <div className="nj_service_box">
            <h3>Line items</h3>
            <div className="flex_row nj_service_box_title">
              <p>Services</p>
              <p
                className="nj_add_service"
                onClick={() => setShowServiceModal(true)}
              >
                Service Price Book
              </p>
            </div>
          </div>
        </div>
      </div>
      {showServiceModal && (
        <Modal onClose={() => setShowServiceModal(false)}>
          <AddServiceModal
            setShowServiceModal={() => setShowServiceModal(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default NewJob;
