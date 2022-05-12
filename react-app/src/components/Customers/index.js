import React, { useState } from "react";

import { Modal } from "../Context/Modal";

import { ReactComponent as AddCustomerIcon } from "../../static/svg/addcustomer.svg";
import { ReactComponent as ThreeDotsIcon } from "../../static/svg/threedots.svg";
import { ReactComponent as SearchIcon } from "../../static/svg/search.svg";
import { ReactComponent as SearchClearIcon } from "../../static/svg/searchclear.svg";
import { ReactComponent as MulitIcon } from "../../static/svg/mulit.svg";

import "./Customers.css";

const Customers = () => {
  const [filter, setFilter] = useState("");
  const [mulitbox, setMulitbox] = useState(false);
  const [checkedFirstName, setCheckedFirstName] = useState(true);
  const [checkedLastName, setCheckedLastName] = useState(true);
  const [checkedDisplayName, setCheckedDisplayName] = useState(true);
  const [checkedAddress, setCheckedAddress] = useState(true);
  const [checkedMobileNumber, setCheckedMobileNumber] = useState(true);
  const [checkedWorknumber, setCheckedWorknumber] = useState(true);
  const [checkedEmail, setCheckedEmail] = useState(true);
  const [checkedCompany, setCheckedCompany] = useState(true);
  const [checkedJobTitle, setCheckedJobTitle] = useState(true);
  const [checkedWorkNumber, setCheckedWorkNumber] = useState(true);

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
          {checkedWorknumber && <h2>Home Number</h2>}
          {checkedEmail && <h2>Email</h2>}
          {checkedCompany && <h2>Company</h2>}
          {checkedJobTitle && <h2>Job Title</h2>}
          {checkedWorkNumber && <h2>Work Number</h2>}
        </div>
      </div>
      {mulitbox && (
        <Modal onClose={() => setMulitbox(false)}>
          <div className="modal_container">
            <h1>Select columns to view</h1>
            <div className="flex_row">
              <div className="flex_column mulit_inner_container">
                <div className="flex_row">
                  <input value={checkedDisplayName} type="checkbox" />
                  <p>Display Name</p>
                </div>
                <div className="flex_row">
                  <input type="checkbox" />
                  <p>First Name</p>
                </div>
                <div className="flex_row">
                  <input type="checkbox" />
                  <p>Last Name</p>
                </div>
                <div className="flex_row">
                  <input type="checkbox" />
                  <p>Job Title</p>
                </div>
                <div className="flex_row">
                  <input type="checkbox" />
                  <p>Company</p>
                </div>
              </div>
              <div className="flex_column mulit_inner_container">
                <div className="flex_row">
                  <input type="checkbox" />
                  <p>Address</p>
                </div>
                <div className="flex_row">
                  <input type="checkbox" />
                  <p>Mobile Number</p>
                </div>
                <div className="flex_row">
                  <input type="checkbox" />
                  <p>Home Number</p>
                </div>
                <div className="flex_row">
                  <input type="checkbox" />
                  <p>Email </p>
                </div>
                <div className="flex_row">
                  <input type="checkbox" />
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
