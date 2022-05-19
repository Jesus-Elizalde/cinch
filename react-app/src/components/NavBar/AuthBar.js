import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logoutbutton from "../auth/LogoutButton";

import { ReactComponent as CustomerIcon } from "../../static/svg/customer.svg";
import { ReactComponent as ScheduleIcon } from "../../static/svg/schedule.svg";
import { ReactComponent as PlusIcon } from "../../static/svg/plus.svg";
import { ReactComponent as MapIcon } from "../../static/svg/map.svg";
import { ReactComponent as SignoutIcon } from "../../static/svg/signout.svg";
import { ReactComponent as NewCustomerIcon } from "../../static/svg/addcustomer.svg";
import { ReactComponent as NewJobIcon } from "../../static/svg/newjob.svg";
import { useSelector } from "react-redux";
import { Modal } from "../Context/Modal";
import NewCustomer from "../Customers/NewCustomer";

const AuthBar = () => {
  const user = useSelector((state) => state.session.user);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showNewDropdown, setShowNewDropdown] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const openUserDropdown = () => {
    if (showUserDropdown) return;

    setShowUserDropdown(true);
  };

  useEffect(() => {
    if (!showUserDropdown) return;

    const closeUserDropdown = () => {
      if (!showUserDropdown) return;
      setShowUserDropdown(false);
    };

    document.addEventListener("click", closeUserDropdown);

    return () => document.removeEventListener("click", closeUserDropdown);
  }, [showUserDropdown]);

  const openNewDropDown = () => {
    if (showNewDropdown) return;
    setShowNewDropdown(true);
  };

  useEffect(() => {
    if (!showNewDropdown) return;

    const closeNewDropdown = () => {
      if (!showNewDropdown) return;
      setShowNewDropdown(false);
    };

    document.addEventListener("click", closeNewDropdown);

    return () => document.removeEventListener("click", closeNewDropdown);
  }, [showNewDropdown]);

  return (
    <div className="auth_bar_container flex_row">
      <div className="flex_row main_icons">
        {/* <NavLink to="/dashboard">
          <span className="flex_column">
            <DashIcon />
            Dash
          </span>
        </NavLink> */}
        <NavLink to="/jobs">
          <span className="flex_column">
            <ScheduleIcon />
            {/* Schedule */}
            Jobs
          </span>
        </NavLink>
        <NavLink to="/customers">
          <span className="flex_column">
            <CustomerIcon />
            Customers
          </span>
        </NavLink>
      </div>
      <div className="flex_row right_icons">
        <div className="space_margin">
          <button type="button" onClick={() => setShowNewDropdown(true)}>
            <span className="flex_row new_button">
              <PlusIcon />
              NEW
            </span>
          </button>
          {showNewDropdown && (
            <div className="flex_column new_button_container">
              <NavLink to="/jobs/new">
                <div className="flex_row align_items">
                  <NewJobIcon />
                  <p>Job</p>
                </div>
              </NavLink>
              <div
                className="flex_row align_items"
                onClick={() => setShowAddModal(true)}
              >
                <NewCustomerIcon />
                <p>Customer</p>
              </div>
            </div>
          )}
        </div>
        <NavLink to="/map" className="space_margin">
          <span className="flex_column">
            <MapIcon />
          </span>
        </NavLink>
        <div>
          <div
            className="profile_circle flex_row space_margin"
            onClick={openUserDropdown}
          >
            {user?.first_name[0]} {user?.last_name[0]}
          </div>
          {showUserDropdown && (
            <div className="user_dropdown">
              <div className="flex_row user_dropdown_info">
                <div className="profile_circle flex_row user_dropdown_circle">
                  {user?.first_name[0]} {user?.last_name[0]}
                </div>
                <div className="flex_column user_dropdown_details">
                  <p>
                    {user?.first_name} {user?.last_name}
                  </p>
                  <p>{user?.email}</p>
                </div>
              </div>
              {/* <NavLink to="/account" className="flex_row user_dropdown_pair">
                <SettingsIcon />
                <p>Account Settings</p>
              </NavLink> */}
              <div className="flex_row user_dropdown_pair">
                <SignoutIcon />
                <Logoutbutton />
              </div>
            </div>
          )}
        </div>
      </div>
      {showAddModal && (
        <Modal onClose={() => setShowAddModal(false)}>
          <NewCustomer
            closeModal={() => setShowAddModal(false)}
            businessId={user?.business_id}
          />
        </Modal>
      )}
    </div>
  );
};

export default AuthBar;
