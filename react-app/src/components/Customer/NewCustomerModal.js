import React, { useState } from "react";
import { Modal } from "../Context/Modal";
import { ReactComponent as Xlogo } from "../../static/svg/xbutton.svg";

import "./NewCustomerModal.css";

const NewCustomerModal = ({ onClose }) => {
  const [customer, setCustomer] = useState({
    first_name: "",
    last_name: "",
    mobile_number: "",
    home_number: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    note: "",
  });

  const updateCustomer = (e) => {
    setCustomer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <Modal onClose={onClose}>
      <form className="new_customer_modal">
        <div className="flex_column">
          <div className="flex_row upper_group">
            <div onClick={onClose} className="x_box">
              <Xlogo />
            </div>
            <h1>Create Customer</h1>
          </div>
          <div className="middle_group">
            <div className="flex_row input_groups">
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                value={customer.first_name}
                onChange={updateCustomer}
              />
            </div>
            <div className="flex_row input_groups">
              <label>Last Name</label>
              <input
                placeholder="Last Name"
                name="last_name"
                value={customer.last_name}
                onChange={updateCustomer}
              />
            </div>
            <div className="flex_row input_groups">
              <label>Phone Number</label>
              <input
                placeholder="000-000-0000"
                name="mobile_number"
                value={customer.mobile_number}
                onChange={updateCustomer}
              />
            </div>
            <div className="flex_row input_groups">
              <label>Home Number</label>
              <input
                placeholder="000-000-0000"
                name="home_number"
                value={customer.home_number}
                onChange={updateCustomer}
              />
            </div>
            <div className="flex_row input_groups">
              <label>Email</label>
              <input
                placeholder="Email Address"
                name="email"
                value={customer.email}
                onChange={updateCustomer}
              />
            </div>
            <div className="flex_row input_groups">
              <label>Address</label>
              <div className="flex_column">
                <input
                  placeholder="Street"
                  name="street"
                  value={customer.street}
                  onChange={updateCustomer}
                />
                <input
                  placeholder="City"
                  name="city"
                  value={customer.city}
                  onChange={updateCustomer}
                />
                <input
                  placeholder="State"
                  name="state"
                  value={customer.state}
                  onChange={updateCustomer}
                />
                <input
                  placeholder="ZIP"
                  name="zip"
                  value={customer.zip}
                  onChange={updateCustomer}
                />
              </div>
            </div>
            <div className="flex_row input_groups">
              <label>Note</label>
              <textarea
                placeholder="Customer Notes"
                name="note"
                value={customer.note}
                onChange={updateCustomer}
              />
            </div>
          </div>
          <div className="flex_row lower_group">
            <button type="button">Cancel</button>
            <button type="submit" onClick={submitForm}>
              Save
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default NewCustomerModal;
