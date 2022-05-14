import React, { useState } from "react";
import { Modal } from "../Context/Modal";

const EditCustomerMap = ({ customer }) => {
  const [street, setStreet] = useState(customer?.street);
  const [city, setCity] = useState(customer?.city);
  const [state, setState] = useState(customer?.state);
  const [country, setCountry] = useState(customer?.country);
  const [zipCode, setZipCode] = useState(customer?.postal_code);
  const [errors, setErrors] = useState([]);
  return (
    <div className="flex_column">
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
      {/* <div className="flex_row new_customer_button_group">
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
      </div> */}
    </div>
  );
};

export default EditCustomerMap;
