import React, { useState } from "react";
import { useSelector } from "react-redux";
// import Button from "../utils/Button";
import SearchBar from "../utils/SearchBar";

import "./Customer.css";
import CustomerTable from "./CustomerTable";

const Customer = () => {
  const user = useSelector((state) => state.session.user);
  const customers = useSelector((state) =>
    Object.values(state.customers).filter(
      (customers) => customers.business_id === user?.business_id
    )
  );

  const [searchCustomer, setSearchCustomer] = useState("");

  return (
    <div className="flex_column">
      {/* <div className="flex_row space_between ">
        <SearchBar input={searchCustomer} setInput={setSearchCustomer} />
        <div className="flex_row customers_button_group">
          {/* <Button style={1} value="Import Customers" onClickFunc={""} />
          <Button style={1} value="Export Customers" onClickFunc={""} /> */}
      {/* <Button style={2} value="Create Customer" onClickFunc={""} /> */}
      {/* </div>
      </div> */}
      {/* // <div className="customer_total_group">
      //   {customers.length} Total Customers
      // </div>
      // <div>
      //   <CustomerTable />
      // </div> */}
    </div>
  );
};

export default Customer;
