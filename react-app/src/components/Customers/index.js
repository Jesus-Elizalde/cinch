import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Modal } from "../Context/Modal";

import { ReactComponent as AddCustomerIcon } from "../../static/svg/addcustomer.svg";
import { ReactComponent as ThreeDotsIcon } from "../../static/svg/threedots.svg";
import { ReactComponent as SearchIcon } from "../../static/svg/search.svg";
import { ReactComponent as SearchClearIcon } from "../../static/svg/searchclear.svg";
import { ReactComponent as MulitIcon } from "../../static/svg/mulit.svg";

import "./Customers.css";
import SingleCustomer from "./SingleCustomer";

const Customers = () => {
  const user = useSelector((state) => state.session.user);
  const business = useSelector((state) => state.businesses[user?.id]);

  const [filter, setFilter] = useState("");
  const [mulitbox, setMulitbox] = useState(false);
  const [checkedFirstName, setCheckedFirstName] = useState(true);
  const [checkedLastName, setCheckedLastName] = useState(true);
  const [checkedDisplayName, setCheckedDisplayName] = useState(true);
  const [checkedAddress, setCheckedAddress] = useState(true);
  const [checkedMobileNumber, setCheckedMobileNumber] = useState(true);
  const [checkedHomeNumber, setCheckedHomeNumber] = useState(true);
  const [checkedEmail, setCheckedEmail] = useState(true);
  const [checkedCompany, setCheckedCompany] = useState(true);
  const [checkedJobTitle, setCheckedJobTitle] = useState(true);
  const [checkedWorkNumber, setCheckedWorkNumber] = useState(true);

  const states = {
    checkedFirstName,
    checkedLastName,
    checkedDisplayName,
    checkedAddress,
    checkedMobileNumber,
    checkedHomeNumber,
    checkedEmail,
    checkedCompany,
    checkedJobTitle,
    checkedWorkNumber,
  };

  return (
    <div className="flex_column customer_main_container">
      <div className="flex_row title_container">
        <h1># customers</h1>
        <div className="flex_row title_right_side_conatiner">
          <div className="flex_row main_input_container">
            <SearchIcon />
            <input
              value={filter}
              placeholder="Search"
              onChange={(e) => setFilter(e.target.value)}
              className="filter_input"
            />
            <div onClick={() => setFilter("")}>
              <SearchClearIcon />
            </div>
          </div>
          <div>
            <AddCustomerIcon />
          </div>
          <div onClick={() => setMulitbox(true)}>
            <MulitIcon />
          </div>
          <div>
            <ThreeDotsIcon />
          </div>
        </div>
      </div>
      <div className="flex_column">
        <div className="flex_row default_container">
          <input type="checkbox" />
          {checkedDisplayName && <h2>Display</h2>}
          {checkedFirstName && <h2>First Name</h2>}
          {checkedLastName && <h2>Last Name</h2>}
          {checkedAddress && <h2>Address</h2>}
          {checkedMobileNumber && <h2>Mobile Number</h2>}
          {checkedHomeNumber && <h2>Home Number</h2>}
          {checkedEmail && <h2>Email</h2>}
          {checkedCompany && <h2>Company</h2>}
          {checkedJobTitle && <h2>Job Title</h2>}
          {checkedWorkNumber && <h2>Work Number</h2>}
        </div>
        {business?.customers.map((customer) => (
          <SingleCustomer
            key={customer.id}
            states={states}
            customer={customer}
          />
        ))}
      </div>
      {mulitbox && (
        <Modal onClose={() => setMulitbox(false)}>
          <div className="modal_container">
            <h1>Select columns to view</h1>
            <div className="flex_row">
              <div className="flex_column mulit_inner_container">
                <div className="flex_row">
                  <input
                    value={checkedDisplayName}
                    checked={checkedDisplayName}
                    type="checkbox"
                    onChange={(e) => setCheckedDisplayName(e.target.checked)}
                  />
                  <p>Display Name</p>
                </div>
                <div className="flex_row">
                  <input
                    value={checkedFirstName}
                    checked={checkedFirstName}
                    type="checkbox"
                    onChange={(e) => setCheckedFirstName(e.target.checked)}
                  />
                  <p>First Name</p>
                </div>
                <div className="flex_row">
                  <input
                    value={checkedLastName}
                    checked={checkedLastName}
                    type="checkbox"
                    onChange={(e) => setCheckedLastName(e.target.checked)}
                  />
                  <p>Last Name</p>
                </div>
                <div className="flex_row">
                  <input
                    value={checkedJobTitle}
                    checked={checkedJobTitle}
                    type="checkbox"
                    onChange={(e) => setCheckedJobTitle(e.target.checked)}
                  />
                  <p>Job Title</p>
                </div>
                <div className="flex_row">
                  <input
                    value={checkedCompany}
                    checked={checkedCompany}
                    type="checkbox"
                    onChange={(e) => setCheckedCompany(e.target.checked)}
                  />
                  <p>Company</p>
                </div>
              </div>
              <div className="flex_column mulit_inner_container">
                <div className="flex_row">
                  <input
                    value={checkedAddress}
                    checked={checkedAddress}
                    type="checkbox"
                    onChange={(e) => setCheckedAddress(e.target.checked)}
                  />
                  <p>Address</p>
                </div>
                <div className="flex_row">
                  <input
                    value={checkedMobileNumber}
                    checked={checkedMobileNumber}
                    type="checkbox"
                    onChange={(e) => setCheckedMobileNumber(e.target.checked)}
                  />
                  <p>Mobile Number</p>
                </div>
                <div className="flex_row">
                  <input
                    value={checkedHomeNumber}
                    checked={checkedHomeNumber}
                    type="checkbox"
                    onChange={(e) => setCheckedHomeNumber(e.target.checked)}
                  />
                  <p>Home Number</p>
                </div>
                <div className="flex_row">
                  <input
                    value={checkedEmail}
                    checked={checkedEmail}
                    type="checkbox"
                    onChange={(e) => setCheckedEmail(e.target.checked)}
                  />
                  <p>Email </p>
                </div>
                <div className="flex_row">
                  <input
                    value={checkedWorkNumber}
                    checked={checkedWorkNumber}
                    type="checkbox"
                    onChange={(e) => setCheckedWorkNumber(e.target.checked)}
                  />
                  <p>Work Number</p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Customers;
