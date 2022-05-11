import React from "react";
import { useSelector } from "react-redux";

import AuthBar from "./AuthBar";

import "./NavBar.css";
import NotAuthBar from "./NotAuthBar";

const NavBar = () => {
  const user = useSelector((state) => state.session.user);
  return (
    <nav className="flex_row ">{!user ? <NotAuthBar /> : <AuthBar />}</nav>
  );
};

export default NavBar;
