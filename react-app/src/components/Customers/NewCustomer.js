import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newCustomer } from "../../store/business";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const NewCustomer = ({ closeModal, businessId }) => {
  const googleMapKey = useSelector((state) => state.keys.googleApiKey);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [jobTitle, setjobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [homeNumber, setHomeNumber] = useState("");
  const [workNumber, setWorkNumber] = useState("");
  const [company, setCompany] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");

  // const [value, setValue] = useState("");

  const [errors, setErrors] = useState([]);

  const onSubmit = async () => {
    const results = {
      first_name: firstName,
      last_name: lastName,
      display_name: displayName,
      job_title: jobTitle,
      email,
      mobile_number: mobileNumber,
      home_number: homeNumber,
      work_number: workNumber,
      company,
      street,
      city,
      state,
      country,
      postal_code: zipCode,
      business_id: businessId,
    };

    const data = await dispatch(newCustomer(results));
    if (data) {
      setErrors(data);
      return;
    }
    closeModal();
  };

  return (
    <div className="modal_container flex_column add_customer_modal">
      <h1>Add new customer</h1>
      {errors.map((error) => (
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
              placeholder="Home Phone (optional)"
              value={homeNumber}
              onChange={(e) => setHomeNumber(e.target.value)}
            />
          </div>
          <div className="flex_row add_customer_input_container longer_input_add_space">
            <input
              placeholder="Email"
              id="longer_input_add"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Work Phone (optional)"
              value={workNumber}
              onChange={(e) => setWorkNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="flex_column">
          <div className="add_customer_input_container">
            <input
              placeholder="Company (optional)"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="add_customer_input_container">
            <input
              placeholder="Job Title (optional)"
              value={jobTitle}
              onChange={(e) => setjobTitle(e.target.value)}
            />
          </div>
        </div>
      </div>
      <h4>Address</h4>
      <div className="flex_row ">
        <div className="flex_column">
          <div className="flex_row add_customer_input_container">
            <input
              placeholder="Street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <input
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="flex_row add_customer_input_container">
            <input
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <input
              placeholder="Zip"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* <GooglePlacesAutocomplete
        apiKey={googleMapKey}
        selectProps={{
          value,
          onChange: setValue,
        }}
      /> */}
      <div className="flex_row new_customer_button_group">
        <div className="flex_row">
          <button onClick={closeModal} className="new_customer_button ">
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="new_customer_button new_customer_submit"
          >
            Create Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCustomer;
