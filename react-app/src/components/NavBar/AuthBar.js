import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logoutbutton from "../auth/LogoutButton";

import { ReactComponent as DashIcon } from "../../static/svg/dash.svg";
import { ReactComponent as CustomerIcon } from "../../static/svg/customer.svg";
import { ReactComponent as ScheduleIcon } from "../../static/svg/schedule.svg";
import { ReactComponent as PlusIcon } from "../../static/svg/plus.svg";
import { ReactComponent as MapIcon } from "../../static/svg/map.svg";
import { ReactComponent as SettingsIcon } from "../../static/svg/settings.svg";
import { ReactComponent as SignoutIcon } from "../../static/svg/signout.svg";
import { useSelector } from "react-redux";

const AuthBar = () => {
  const user = useSelector((state) => state.session.user);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

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

  return (
    <div className="auth_bar_container flex_row">
      <div className="flex_row main_icons">
        <NavLink to="/dashboard">
          <span className="flex_column">
            <DashIcon />
            Dash
          </span>
        </NavLink>
        <NavLink to="/schedules">
          <span className="flex_column">
            <ScheduleIcon />
            Schedule
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
        <button type="button" className="space_margin">
          <span className="flex_row new_button">
            <PlusIcon />
            NEW
          </span>
        </button>
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
              <div className="flex_row user_dropdown_pair">
                <SettingsIcon />
                <p>Account Settings</p>
              </div>
              <div className="flex_row user_dropdown_pair">
                <SignoutIcon />
                <Logoutbutton />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthBar;
