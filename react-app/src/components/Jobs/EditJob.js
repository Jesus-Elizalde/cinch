import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavLink, useHistory, useParams } from "react-router-dom";

import { Modal } from "../Context/Modal";

// import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ReactComponent as XIcon } from "../../static/svg/xicon.svg";
import { ReactComponent as ScheduleIcon } from "../../static/svg/blackschedule.svg";
import { ReactComponent as XCircleIcon } from "../../static/svg/circlex.svg";

import "./NewJob.css";
import NotSelectedCustomer from "./NotSelectedCustomer";

import SelectedCustomer from "./SelectedCustomer";
import { editJobDetails, newJobDetails } from "../../store/job";
import AddServiceModal from "./AddServiceModal";

const EditJob = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const business = useSelector((state) => state.businesses[user?.business_id]);
  const services = useSelector((state) => state.services);
  const job = useSelector((state) => state.jobs[+id]);

  const customer = business?.customers.filter(
    (customer) => customer.id == job?.customer_id
  )[0];

  const [fromDate, setFromDate] = useState(
    job?.from_date_time && new Date(job?.from_date_time)
  );
  const [toDate, setToDate] = useState(
    job?.to_date_time && new Date(job?.to_date_time)
  );
  const [message, setMessage] = useState(job?.message);
  const [searchCustomer, setSearchCustomer] = useState("");
  const [jobIds, setJobIds] = useState(
    job?.services?.map((service) => service.id)
  );

  const [selectedCustomer, setSelectedCustomer] = useState(customer);

  const [errors, setErrors] = useState([]);

  const [showServiceModal, setShowServiceModal] = useState(false);

  const history = useHistory();

  const onSubmit = async () => {
    const results = {
      id,
      message,
      from_date_time: fromDate,
      to_date_time: toDate,
      customer_id: selectedCustomer?.id,
      job_ids: jobIds.join("-"),
    };

    const data = await dispatch(editJobDetails(results));
    if (data) {
      setErrors(data);
      return;
    }
    setErrors([]);
    history.push("/jobs");
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
          <NavLink to="/jobs">
            <XIcon />
          </NavLink>
          <h2>Edit job</h2>
        </div>
        <div>
          <button onClick={onSubmit} className="nj_add_button">
            Edit Job
          </button>
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
                Add Service +
              </p>
            </div>
            <div className="flex_column align_item service_box_container_x">
              {jobIds?.map((jobId) => (
                <div className="flex_row nj_outer_service_tile">
                  <div className="flex_column">
                    <p>{services[jobId]?.name}</p>
                    <p>{services[jobId]?.description}</p>
                  </div>
                  <div className="flex_row align_item">
                    <div className="flex_column">
                      <p>${services[jobId]?.price}</p>
                    </div>
                    <div
                      onClick={() =>
                        setJobIds(
                          jobIds.filter((id) => +id !== +services[jobId].id)
                        )
                      }
                    >
                      <XCircleIcon />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p>Message (optional) </p>
            <div className="flex_row">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="message_input"
              />

              {message?.length <= 500 ? (
                <p className="color_green">{message?.length}/500 Chars</p>
              ) : (
                <p className="color_red">{message?.length}/500 Chars</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {showServiceModal && (
        <Modal onClose={() => setShowServiceModal(false)}>
          <AddServiceModal
            setShowServiceModal={() => setShowServiceModal(false)}
            setJobIds={setJobIds}
            jobIds={jobIds}
          />
        </Modal>
      )}
    </div>
  );
};

export default EditJob;
