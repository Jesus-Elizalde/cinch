import React from "react";
import LoginForm from "../auth/LoginForm";

import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="flex_column">
      <div className="banner_container">
        <img
          src="https://i0.wp.com/hcpmktsite.wpcomstaging.com/wp-content/uploads/2022/01/home-hero-static-desktop_compressed.webp?w=799&ssl=1"
          alt=""
          className="banner_img"
        />
        <div className="banner_text_container flex_column">
          <h5>Free 14 day trail</h5>
          <h1>Work Simpler. Grow Smarter.</h1>
          <h4>
            Start a risk free trial to see how easily you can improve
            scheduling, dispatching, invoicing and payment collection.
          </h4>
        </div>
      </div>
      <div className="flex_column why_container">
        <h5>Why Cinch Pro?</h5>
        <h2>Solutions for your business.</h2>
        <h4>
          Whether you need to improve dispatching, reduce paperwork, increase
          workforce or grow revenue, we have a solution.
        </h4>
      </div>
      <LoginForm />
    </div>
  );
};

export default LandingPage;
