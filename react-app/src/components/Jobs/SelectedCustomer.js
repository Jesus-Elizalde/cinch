import React from "react";
import GoogleMap from "../GoogleMap";

import { ReactComponent as AddCustomerIcon } from "../../static/svg/addcustomer.svg";

const SelectedCustomer = ({ setSelectedCustomer, selectedCustomer }) => {
  return (
    <div className="flex_column new_job_customer_box nj_selected_box">
      <div className="flex_row align_item new_job_customer_container">
        <AddCustomerIcon />
        <h3>Customer</h3>
        <p onClick={() => setSelectedCustomer("")}>X</p>
      </div>
      <GoogleMap
        coords={{
          lat: +selectedCustomer.coords[0],
          lng: +selectedCustomer.coords[1],
        }}
        size={{ width: "275px", height: "130px" }}
        zoom={false}
        zoomNum={13}
      />
      <p>{selectedCustomer.display_name}</p>
      <p>{selectedCustomer.street}</p>
      <p>
        {selectedCustomer.city} {selectedCustomer.state}{" "}
        {selectedCustomer.country} {selectedCustomer.postal_code}
      </p>
    </div>
  );
};

export default SelectedCustomer;
