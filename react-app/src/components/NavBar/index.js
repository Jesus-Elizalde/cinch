import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import "./NavBar.css";
import { SidebarData } from "./SidebarData";

import { IconContext } from "react-icons/lib";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/session";
import { getBusinessDetails } from "../../store/business";
import { getCustomersDetails } from "../../store/customer";

import ReactWeather, { useWeatherBit } from "react-open-weather";

const NavBar = () => {
  const dispatch = useDispatch();

  const weatherKey = useSelector((state) => state.keys.weather_key);

  const [sidebar, setSidebar] = useState(false);
  const [coords, setCoords] = useState({ lat: "", lang: "" });

  useEffect(() => {
    dispatch(getBusinessDetails());
    dispatch(getCustomersDetails());
  }, [dispatch]);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(function (position) {
      setCoords({
        lat: position.coords.latitude,
        lang: position.coords.longitude,
      });
    });
  }, [dispatch]);

  const showSidebar = () => setSidebar(!sidebar);

  const { data, isLoading, errorMessage } = useWeatherBit({
    key: weatherKey,
    lat: coords["lat"],
    lon: coords["lang"],
    lang: "en",
    unit: "I", // values are (M,S,I)
  });

  const onLogout = async (e) => {
    await dispatch(logout());
  };

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
            <div className="weather-api">
              <ReactWeather
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang="en"
                // locationLabel="Munich"
                unitsLabels={{ temperature: "F", windSpeed: "Mph" }}
                showForecast
              />
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};
export default NavBar;
