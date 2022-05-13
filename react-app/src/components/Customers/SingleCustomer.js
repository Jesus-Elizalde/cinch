import React from "react";

const SingleCustomer = ({ states, customer, checkboxState }) => {
  const { deleteArr, setDeleteArr } = checkboxState;

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

  const addOneCustomers = (e) => {
    if (!e.target.checked) {
      setDeleteArr(deleteArr.filter((id) => id !== customer.id));
    } else {
      setDeleteArr([...deleteArr, customer.id]);
    }
  };
  return (
    <tr className="table_row">
      <input
        type="checkbox"
        value={deleteArr.includes(customer.id)}
        checked={deleteArr.includes(customer.id)}
        onChange={addOneCustomers}
      />
      {checkedDisplayName && (
        <td className="table_td_align">{customer?.display_name}</td>
      )}
      {checkedFirstName && (
        <td className="table_td_align">{customer?.first_name}</td>
      )}
      {checkedLastName && (
        <td className="table_td_align">{customer?.last_name}</td>
      )}
      {checkedAddress && <td className="table_td_align">{customer?.street}</td>}
      {checkedMobileNumber && (
        <td className="table_td_align">{customer?.mobile_number}</td>
      )}
      {checkedHomeNumber && (
        <td className="table_td_align">{customer?.home_number}</td>
      )}
      {checkedEmail && <td className="table_td_align">{customer?.email}</td>}
      {checkedCompany && (
        <td className="table_td_align">{customer?.company}</td>
      )}
      {checkedJobTitle && (
        <td className="table_td_align">{customer?.job_title}</td>
      )}
      {checkedWorkNumber && (
        <td className="table_td_align">{customer?.work_number}</td>
      )}
    </tr>
  );
};

export default SingleCustomer;
