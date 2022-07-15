import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import "./Navbar.css";
import { SidebarData } from "./SidebarData";

import { IconContext } from "react-icons/lib";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

const NavBar = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
  };
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#0bbbd4" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <GrClose />
              </Link>
            </li>
            {SidebarData.map((item, idx) => {
              return (
                <li key={idx} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="nav-text">
              <Link to="#" onClick={onLogout}>
                <FaSignOutAlt />
                <span>Sign Out</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};
export default NavBar;
