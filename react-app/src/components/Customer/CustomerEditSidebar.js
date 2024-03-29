import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { ReactComponent as XIcon } from "../../static/svg/xbutton.svg";

import "./CustomerEdit.css";
import EditCustomerModal from "./EditCustomerModal";
const CustomerEditSidebar = () => {
  const { id } = useParams();
  const customer = useSelector((state) => state.customers[id]);
  const history = useHistory();

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <nav
      //   className={sidebar ? "customer-nav-menu active" : "customer-nav-menu "}
      className="customer-nav-menu active"
    >
      <div className="flex_row">
        <div onClick={() => history.push("/customers")}>
          <XIcon />
        </div>
        <p>{customer?.first_name + " " + customer?.last_name}</p>
        <p onClick={toggleModal}>Edit</p>
      </div>
      <div>
        <div className="flex_column">
          <h4>Personal Information</h4>
          <div>
            <p>NAME</p>
            <p>{customer?.first_name + " " + customer?.last_name}</p>
          </div>
          <div>
            <p>ADDRESS</p>
            <p>
              {customer?.addresses[0].street +
                " " +
                customer?.addresses[0].city +
                " " +
                customer?.addresses[0].state +
                " " +
                customer?.addresses[0].postal_code}
            </p>
          </div>
        </div>
      </div>
      {showModal && <EditCustomerModal onClose={() => setShowModal(false)} />}
    </nav>
  );
};

export default CustomerEditSidebar;
