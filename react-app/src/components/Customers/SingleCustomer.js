import React from "react";

const SingleCustomer = ({ states, customer }) => {
  const {
    checkedFirstName,
    checkedLastName,
    checkedDisplayName,
    checkedAddress,
    checkedMobileNumber,
    checkedHomeNumber,
    checkedEmail,
    checkedCompany,
    checkedJobTitle,
    checkedWorkNumber,
  } = states;
  return (
    <div className="flex_row default_container default_container_hover">
      <input type="checkbox" />
      {checkedDisplayName && <p>{customer?.display_name}</p>}
      {checkedFirstName && <p>{customer?.first_name}</p>}
      {checkedLastName && <p>{customer?.last_name}</p>}
      {checkedAddress && <p>{customer?.street}</p>}
      {checkedMobileNumber && <p>{customer?.mobile_number}</p>}
      {checkedHomeNumber && <p>{customer?.home_number}</p>}
      {checkedEmail && <p>{customer?.email}</p>}
      {checkedCompany && <p>{customer?.company}</p>}
      {checkedJobTitle && <p>{customer?.job_title}</p>}
      {checkedWorkNumber && <p>{customer?.work_number}</p>}
    </div>
  );
};

export default SingleCustomer;
