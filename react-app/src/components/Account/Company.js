import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Company.css";

import { Modal } from "../Context/Modal";

const Company = () => {
  const user = useSelector((state) => state.session.user);
  const business = useSelector((state) => state.businesses[user?.id]);

  const [showEditModal, setShowEditModal] = useState(false);
  console.log("🚀 ~ file: Company.js ~ line 8 ~ Company ~ business", business);
  return (
    <div className="company_container">
      <div className="company_inner_container flex_column">
        <div className="flex_row company_name_title">
          {business?.name || "Company Name Not Set"}
          <button onClick={() => setShowEditModal(true)}>Edit</button>
        </div>
        <div className="flex_row company_grid">
          <div className="flex_column">
            {business?.street ? (
              <>
                <p>{business?.street}</p>
                <p>
                  {business?.city}, {business?.state} {business?.country}{" "}
                  {business?.postal_code}
                </p>
              </>
            ) : (
              "Not Set"
            )}
          </div>
          <div className="flex_column">
            <p>Website</p>
            <p>{business?.website_url || "Not Set"}</p>
          </div>
          <div className="flex_column">
            <p>Email</p>
            <p>{business?.email || "Not Set"}</p>
          </div>
        </div>
        <div className="flex_row company_grid">
          <div className="flex_column">
            <p>{business?.number || "Not Set"}</p>
          </div>
          <div className="flex_column">
            <p>License #</p>
            <p>{business?.license_num || "Not Set"}</p>
          </div>
        </div>
        <div className="flex_row ">
          <div className="flex_column image_company_unedit">
            <img
              src={
                business?.logo ||
                "https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png.webp"
              }
            />
          </div>
          <div className="flex_column profile_box">
            <p>COMPANY PROFILE</p>
            <p>{business?.profile || "Not Set"}</p>
          </div>
        </div>
        <div className="flex_row"></div>
      </div>
      {showEditModal && (
        <Modal onClose={() => setShowEditModal(false)}>
          <div className="company_edit_modal flex_row">
            <div></div>
            <div></div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Company;
