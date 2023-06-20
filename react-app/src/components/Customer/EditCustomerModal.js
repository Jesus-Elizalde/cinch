import React, { useState } from "react";
import { Modal } from "../Context/Modal";

import { ReactComponent as Xlogo } from "../../static/svg/xbutton.svg";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editCustomerDetails } from "../../store/customer";

const EditCustomerModal = ({ onClose }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dbCustomer = useSelector((state) => state.customers[id]);

  const [errors, setErrors] = useState([]);
  console.log(
    "🚀 ~ file: EditCustomerModal.js ~ line 15 ~ EditCustomerModal ~ errors",
    errors
  );
  const [customer, setCustomer] = useState({
    id: id,
    first_name: dbCustomer?.first_name,
    last_name: dbCustomer?.last_name,
    mobile_number: dbCustomer?.mobile_number,
    home_number: dbCustomer?.home_number,
    email: dbCustomer?.email,
    street: dbCustomer?.addresses[0].street,
    city: dbCustomer?.addresses[0].city,
    state: dbCustomer?.addresses[0].state,
    postal_code: dbCustomer?.addresses[0].postal_code,
    note: dbCustomer?.note,
  });
  console.log(
    "🚀 ~ file: EditCustomerModal.js ~ line 32 ~ EditCustomerModal ~ customer",
    customer
  );

  const updateCustomer = (e) => {
    setCustomer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const data = await dispatch(editCustomerDetails(customer));

    if (data) {
      setErrors(data);
    }
    onClose();
  };

  return (
    <Modal>
      <form className="new_customer_modal">
        <div className="flex_column">
          <div className="flex_row upper_group">
            <div onClick={onClose} className="x_box">
              <Xlogo />
            </div>
            <h1>Edit Customer</h1>
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
                  name="postal_code"
                  value={customer.postal_code}
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
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" onClick={submitForm}>
              Save
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default EditCustomerModal;
