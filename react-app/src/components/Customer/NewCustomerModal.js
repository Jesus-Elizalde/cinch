import React, { useState } from "react";
import { Modal } from "../Context/Modal";
import { ReactComponent as Xlogo } from "../../static/svg/xbutton.svg";

import "./NewCustomerModal.css";

const NewCustomerModal = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [homeNumber, setHomeNumber] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [note, setNote] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <Modal onClose={onClose}>
      <form className="new_customer_modal">
        <div className="flex_column">
          <div className="flex_row upper_group">
            <div onClick={onClose}>
              <Xlogo />
            </div>
            <h1>Create Customer</h1>
          </div>
          <div>
            <div className="flex_row">
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex_row">
              <label>Last Name</label>
              <input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="flex_row">
              <label>Phone Number</label>
              <input
                placeholder="000-000-0000"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="flex_row">
              <label>Home Number</label>
              <input
                placeholder="000-000-0000"
                value={homeNumber}
                onChange={(e) => setHomeNumber(e.target.value)}
              />
            </div>
            <div className="flex_row">
              <label>Email</label>
              <input
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex_row">
              <label>Address</label>
              <div className="flex_column">
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
                <input
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
                <input
                  placeholder="ZIP"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
            </div>
            <div className="flex_row">
              <label>Note</label>
              <textarea
                placeholder="Customer Notes"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </div>
          <div className="flex_row">
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
