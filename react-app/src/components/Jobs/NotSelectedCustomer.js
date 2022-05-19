import React from "react";

import { ReactComponent as AddCustomerIcon } from "../../static/svg/addcustomer.svg";
import { ReactComponent as SearchIcon } from "../../static/svg/search.svg";

const NotSelectedCustomer = ({
  searchCustomer,
  setSearchCustomer,
  business,
  setSelectedCustomer,
}) => {
  return (
    <div className="flex_column new_job_customer_box">
      <div className="flex_row align_item new_job_customer_container">
        <AddCustomerIcon />
        <h3>Customer</h3>
      </div>
      <div className="flex_row new_job_search_box">
        <SearchIcon />
        <div className="flex_row">
          <input
            value={searchCustomer}
            onChange={(e) => setSearchCustomer(e.target.value)}
            placeholder="Name"
          />
          {searchCustomer && (
            <div className="new_job_customer_search_results">
              {business?.customers
                .filter(
                  (customer) =>
                    customer.first_name
                      .toLowerCase()
                      .includes(searchCustomer.toLowerCase()) ||
                    customer.last_name
                      .toLowerCase()
                      .includes(searchCustomer.toLowerCase()) ||
                    customer.display_name
                      .toLowerCase()
                      .includes(searchCustomer.toLowerCase()) ||
                    customer.email
                      .toLowerCase()
                      .includes(searchCustomer.toLowerCase()) ||
                    customer.street
                      .toLowerCase()
                      .includes(searchCustomer.toLowerCase()) ||
                    customer.city
                      .toLowerCase()
                      .includes(searchCustomer.toLowerCase()) ||
                    customer.state
                      .toLowerCase()
                      .includes(searchCustomer.toLowerCase()) ||
                    customer.country
                      .toLowerCase()
                      .includes(searchCustomer.toLowerCase()) ||
                    customer.postal_code
                      .toLowerCase()
                      .includes(searchCustomer.toLowerCase()) ||
                    customer.mobile_number
                      .toLowerCase()
                      .includes(searchCustomer.toLowerCase()) ||
                    customer.home_number
                      .toLowerCase()
                      .includes(searchCustomer.toLowerCase()) ||
                    customer.work_number
                      .toLowerCase()
                      .includes(searchCustomer.toLowerCase())
                )
                .map((customer) => (
                  <div
                    className="flex_row"
                    onClick={() => setSelectedCustomer(customer)}
                    key={customer.id}
                  >
                    <p>{customer.display_name}</p>
                    <p>
                      {customer.street} {customer.city} {customer.state}{" "}
                      {customer.country}
                    </p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      <div className="new_job__new_customer">
        <button>+ New Customer</button>
      </div>
    </div>
  );
};

export default NotSelectedCustomer;
