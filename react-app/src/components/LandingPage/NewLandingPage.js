import React from "react";

import { ReactComponent as CinchLogo } from "../../static/svg/cinchlogo.svg";

import "./NewLandingPage.css";
import Button from "../utils/Button";
import { Link, useHistory } from "react-router-dom";

// https://cinchbucket.s3.us-west-1.amazonaws.com/photo-1611095790444-1dfa35e37b52.avif
// https://cinchbucket.s3.us-west-1.amazonaws.com/photo-1600880292203-757bb62b4baf.avif
// https://cinchbucket.s3.us-west-1.amazonaws.com/photo-1577415124269-fc1140a69e91.avif
// https://cinchbucket.s3.us-west-1.amazonaws.com/photo-1545262722-9e0d80a0bc01.avif

const NewLandingPage = () => {
  const history = useHistory();

  const toSignUp = () => history.push("/signup");
  return (
    <div className="flex_column landing_page">
      <div className="flex_row space_between nav_bar_landing_page">
        <div className="flex_row logo_name_group">
          <CinchLogo />
          <h1 className="primary_color">Cinch</h1>
        </div>
        <Link to="/login" className="sign_in_landing_page">
          Sign In
        </Link>
      </div>
      <div className="flex_row middle_group_landing_page">
        <div className="flex_column title_button_group">
          <h1 className="main_header_landing_page">
            Making<span className="primary_color">Estimates</span> and
            <span className="primary_color">Invoices</span> simple.
          </h1>
          <div className="flex_row secound_button_group_landing_page">
            <Button style={3} value={"Get started"} onClickFunc={toSignUp} />
            <Button style={4} value="Contact Sales" />
          </div>
        </div>
        <div>
          <img
            className="images_landing_page"
            alt=""
            src="https://cinchbucket.s3.us-west-1.amazonaws.com/photo-1545262722-9e0d80a0bc01.avif"
          />
        </div>
      </div>
    </div>
  );
};

export default NewLandingPage;
