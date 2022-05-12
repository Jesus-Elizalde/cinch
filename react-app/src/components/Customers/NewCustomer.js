import React, { useState } from "react";

const NewCustomer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [jobTitle, setjobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [homeNumber, setHomeNumber] = useState("");
  const [workNumber, setWorkNumber] = useState("");
  const [company, setCompany] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");

  return (
    <div className="modal_container flex_column add_customer_modal">
      <h1>Add new customer</h1>
      <h4>Contact info</h4>
      <div className="flex_row contact_info_container">
        <div className="flex_column">
          <div className="flex_row add_customer_input_container">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              placeholder="Mobile phone"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div className="flex_row add_customer_input_container longer_input_add_space">
            <input
              placeholder="Display name"
              id="longer_input_add"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <input
              placeholder="Home Phone"
              value={homeNumber}
              onChange={(e) => setHomeNumber(e.target.value)}
            />
          </div>
          <div className="flex_row add_customer_input_container longer_input_add_space">
            <input
              placeholder="Email"
              id="longer_input_add"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Work Phone"
              value={workNumber}
              onChange={(e) => setWorkNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="flex_column">
          <div className="add_customer_input_container">
            <input
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="add_customer_input_container">
            <input
              placeholder="Job Title"
              value={jobTitle}
              onChange={(e) => setjobTitle(e.target.value)}
            />
          </div>
        </div>
      </div>
      <h4>Address</h4>
      <div className="flex_row ">
        <div className="flex_column">
          <div className="flex_row add_customer_input_container">
            <input
              placeholder="Street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <input
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="flex_row add_customer_input_container">
            <input
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <input
              placeholder="Zip"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCustomer;
