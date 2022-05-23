import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal } from "../Context/Modal";
import { CSVLink } from "react-csv";

import { ReactComponent as AddCustomerIcon } from "../../static/svg/addcustomer.svg";
import { ReactComponent as ThreeDotsIcon } from "../../static/svg/threedots.svg";
import { ReactComponent as SearchIcon } from "../../static/svg/search.svg";
import { ReactComponent as SearchClearIcon } from "../../static/svg/searchclear.svg";
import { ReactComponent as MulitIcon } from "../../static/svg/mulit.svg";
import { ReactComponent as DeleteIcon } from "../../static/svg/delete.svg";
import { ReactComponent as DownloadIcon } from "../../static/svg/download.svg";

import "./Customers.css";
import SingleCustomer from "./SingleCustomer";
import NewCustomer from "./NewCustomer";
import { deleteCustomer, getBusinessesDetails } from "../../store/business";

const Customers = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const business = useSelector((state) => state.businesses[user?.business_id]);

  const [filter, setFilter] = useState("");

  const [mulitbox, setMulitbox] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);

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

  const [deleteArr, setDeleteArr] = useState([]);

  const checkboxState = { deleteArr, setDeleteArr };

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

  useEffect(() => {
    if (!showMoreDropdown) return;

    const hideMoreDropdown = () => {
      if (!showMoreDropdown) return;
      setShowMoreDropdown(false);
    };

    document.addEventListener("click", hideMoreDropdown);

    return () => document.removeEventListener("click", hideMoreDropdown);
  }, [showMoreDropdown]);

  useEffect(() => {
    dispatch(getBusinessesDetails());
  }, [showAddModal, showDeleteModal, dispatch]);

  useEffect(() => {}, [filter]);

  const addAllCustomers = (e) => {
    if (e.target.checked) {
      const arr = [];
      business?.customers.forEach((customer) => arr.push(customer.id));
      setDeleteArr(arr);
    } else {
      setDeleteArr([]);
    }
  };

  const deleteCustomerFcn = async () => {
    for (const id of deleteArr) {
      const data = await dispatch(deleteCustomer(id));
    }
    setDeleteArr([]);
    setShowDeleteModal(false);
  };

  const headers = [
    { label: "Display Name", key: "display_name" },
    { label: "First Name", key: "first_name" },
    { label: "Last Name", key: "last_name" },
    { label: "Email", key: "email" },
    { label: "Mobile Number", key: "mobile_number" },
    { label: "Home Number", key: "home_number" },
    { label: "Street", key: "street" },
    { label: "City", key: "city" },
    { label: "State", key: "state" },
    { label: "Country", key: "country" },
    { label: "Postal Code", key: "postal_code" },
    { label: "Company", key: "company" },
    { label: "Job Title", key: "job_title" },
    { label: "Work Number", key: "work_number" },
  ];

  return (
    <div className="flex_column customer_main_container">
      {deleteArr.length ? (
        <div className="flex_row title_container">
          <h1>{deleteArr.length} selected</h1>
          <div className="flex_row title_right_side_conatiner">
            <div onClick={() => setShowDeleteModal(true)}>
              <DeleteIcon />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex_row title_container">
          <h1>{business?.customers.length} customers</h1>
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
            <div onClick={() => setShowAddModal(true)}>
              <AddCustomerIcon />
            </div>
            <div onClick={() => setMulitbox(true)}>
              <MulitIcon />
            </div>
            <div>
              <div onClick={() => setShowMoreDropdown(true)}>
                <ThreeDotsIcon />
              </div>
              {showMoreDropdown && (
                <div className="flex_column more_dropdown_container">
                  {business?.customers && (
                    <div className="flex_row ">
                      <DownloadIcon />
                      <CSVLink data={business?.customers} headers={headers}>
                        Download Customers list
                      </CSVLink>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="all_customers_table_container">
        <table>
          <thead>
            <tr>
              <input
                type="checkbox"
                value={deleteArr.length !== 0}
                onClick={addAllCustomers}
              />
              {checkedDisplayName && <th>Display Name</th>}
              {checkedFirstName && <th>First Name</th>}
              {checkedLastName && <th>Last Name</th>}
              {checkedAddress && <th>Address</th>}
              {checkedMobileNumber && <th>Mobile Number</th>}
              {checkedHomeNumber && <th>Home Number</th>}
              {checkedEmail && <th>Email</th>}
              {checkedCompany && <th>Company</th>}
              {checkedJobTitle && <th>Job Title</th>}
              {checkedWorkNumber && <th>Work Number</th>}
            </tr>
          </thead>
          <tbody>
            {!filter
              ? business?.customers
                  .reverse()
                  .map((customer) => (
                    <SingleCustomer
                      key={customer?.id}
                      states={states}
                      customer={customer}
                      checkboxState={checkboxState}
                    />
                  ))
              : business?.customers
                  .reverse()
                  .filter(
                    (customer) =>
                      customer.first_name
                        .toLowerCase()
                        .includes(filter.toLowerCase()) ||
                      customer.last_name
                        .toLowerCase()
                        .includes(filter.toLowerCase()) ||
                      customer.display_name
                        .toLowerCase()
                        .includes(filter.toLowerCase()) ||
                      customer.email
                        .toLowerCase()
                        .includes(filter.toLowerCase()) ||
                      customer.street
                        .toLowerCase()
                        .includes(filter.toLowerCase()) ||
                      customer.city
                        .toLowerCase()
                        .includes(filter.toLowerCase()) ||
                      customer.state
                        .toLowerCase()
                        .includes(filter.toLowerCase()) ||
                      customer.country
                        .toLowerCase()
                        .includes(filter.toLowerCase()) ||
                      customer.postal_code
                        .toLowerCase()
                        .includes(filter.toLowerCase()) ||
                      customer.mobile_number
                        .toLowerCase()
                        .includes(filter.toLowerCase()) ||
                      customer.home_number
                        .toLowerCase()
                        .includes(filter.toLowerCase()) ||
                      customer.work_number
                        .toLowerCase()
                        .includes(filter.toLowerCase())
                  )
                  .map((customer) => (
                    <SingleCustomer
                      key={customer?.id}
                      states={states}
                      customer={customer}
                      checkboxState={checkboxState}
                    />
                  ))}
          </tbody>
        </table>
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
      {showAddModal && (
        <Modal onClose={() => setShowAddModal(false)}>
          <NewCustomer
            closeModal={() => setShowAddModal(false)}
            businessId={user?.business_id}
          />
        </Modal>
      )}
      {showDeleteModal && (
        <Modal onClose={() => setShowDeleteModal(false)}>
          <div className="flex_column modal_padding">
            <h1>Delete customer?</h1>
            <p>Are you sure? All selected customers will be deleted.</p>
            <div>
              <button onClick={deleteCustomerFcn}>Delete</button>
              <button onClick={() => setShowDeleteModal(false)}>Cancel</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Customers;
