import React, { useState } from "react";

import GooglePlacesAutocomplete from "react-google-places-autocomplete";

import { useDispatch, useSelector } from "react-redux";
import { editCustomer } from "../../store/business";

const EditCustomerMap = ({ customer, closeModal }) => {
  const dispatch = useDispatch();
  const googleMapKey = useSelector((state) => state.keys.googleApiKey);
  const [street, setStreet] = useState(customer?.street);
  const [city, setCity] = useState(customer?.city);
  const [state, setState] = useState(customer?.state);
  const [country, setCountry] = useState(customer?.country);
  const [zipCode, setZipCode] = useState(customer?.postal_code);
  const [errors, setErrors] = useState([]);
  const [value, setValue] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const results = {
      first_name: customer?.first_name,
      last_name: customer?.last_name,
      display_name: customer?.display_name,
      street,
      city,
      state,
      country,
      postal_code: zipCode,
      mobile_number: customer?.mobile_number,
      home_number: customer?.home_number,
      email: customer?.email,
      company: customer?.company,
      job_title: customer?.job_title,
      work_number: customer?.work_number,
      id: +customer?.id,
      business_id: +customer?.business_id,
    };

    const data = await dispatch(editCustomer(results));
    if (data) {
      setErrors(data);
      return;
    }
    closeModal();
  };

  return (
    <div className="flex_column edit_customer_modal">
      <h4>Address</h4>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      {/* {googleMapKey && (
        <GooglePlacesAutocomplete
          apiKey={googleMapKey}
          selectProps={{
            value,
            onChange: setValue,
          }} */}
      {/* /> )} */}
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

export default EditCustomerMap;
