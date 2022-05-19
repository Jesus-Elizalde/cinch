import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editCustomer } from "../../store/business";

const EditCustomerInfo = ({ customer, closeModal }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(customer?.first_name);
  const [lastName, setLastName] = useState(customer?.last_name);
  const [displayName, setDisplayName] = useState(customer?.display_name);
  const [jobTitle, setjobTitle] = useState(customer?.job_title);
  const [email, setEmail] = useState(customer?.email);
  const [mobileNumber, setMobileNumber] = useState(customer?.mobile_number);
  const [homeNumber, setHomeNumber] = useState(customer?.home_number);
  const [workNumber, setWorkNumber] = useState(customer?.work_number);
  const [company, setCompany] = useState(customer?.company);
  const [errors, setErrors] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const resultsTwo = {
      first_name: firstName,
      last_name: lastName,
      display_name: displayName,
      street: customer?.street,
      city: customer?.city,
      state: customer?.state,
      country: customer?.country,
      postal_code: customer?.postal_code,
      mobile_number: mobileNumber,
      home_number: homeNumber,
      email,
      company,
      job_title: jobTitle,
      work_number: workNumber,
      id: +customer?.id,
      business_id: +customer?.business_id,
    };

    const data = await dispatch(editCustomer(resultsTwo));
    if (data) {
      setErrors(data);
    }
    closeModal();
  };

  return (
    <div className="flex_column">
      <h1>Edit customer</h1>
      {errors?.map((error) => (
        <div>{error}</div>
      ))}{" "}
      <h4>Contact info</h4>
      <div className="flex_row contact_info_container">
        <div className="flex_column">
          <div className="flex_row add_customer_input_container">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              placeholder="Mobile phone"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div className="flex_row add_customer_input_container longer_input_add_space">
            <input
              placeholder="Display name"
              id="longer_input_add"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <input
              placeholder="Home Phone"
              value={homeNumber}
              onChange={(e) => setHomeNumber(e.target.value)}
            />
          </div>
          <div className="flex_row add_customer_input_container longer_input_add_space">
            <input
              placeholder="Email"
              id="longer_input_add"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Work Phone"
              value={workNumber}
              onChange={(e) => setWorkNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="flex_column">
          <div className="add_customer_input_container">
            <input
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="add_customer_input_container">
            <input
              placeholder="Job Title"
              value={jobTitle}
              onChange={(e) => setjobTitle(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex_row new_customer_button_group">
        <div className="flex_row">
          <button onClick={closeModal} className="new_customer_button ">
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="new_customer_button new_customer_submit"
          >
            Edit Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCustomerInfo;
