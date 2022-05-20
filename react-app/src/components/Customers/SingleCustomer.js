import React from "react";
import { NavLink, Redirect, useHistory } from "react-router-dom";

const SingleCustomer = ({ states, customer, checkboxState }) => {
  const { deleteArr, setDeleteArr } = checkboxState;
  const history = useHistory();

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
        <td
          className="table_td_align"
          onClick={() => history.push(`/customers/${customer?.id}`)}
        >
          {customer?.display_name}
        </td>
      )}
      {checkedFirstName && (
        <td
          className="table_td_align"
          onClick={() => history.push(`/customers/${customer?.id}`)}
        >
          {customer?.first_name}
        </td>
      )}
      {checkedLastName && (
        <td
          className="table_td_align"
          onClick={() => history.push(`/customers/${customer?.id}`)}
        >
          {customer?.last_name}
        </td>
      )}
      {checkedAddress && (
        <td
          className="table_td_align"
          onClick={() => history.push(`/customers/${customer?.id}`)}
        >
          {customer?.street}
        </td>
      )}
      {checkedMobileNumber && (
        <td
          className="table_td_align"
          onClick={() => history.push(`/customers/${customer?.id}`)}
        >
          {customer?.mobile_number}
        </td>
      )}
      {checkedHomeNumber && (
        <td
          className="table_td_align"
          onClick={() => history.push(`/customers/${customer?.id}`)}
        >
          {customer?.home_number}
        </td>
      )}
      {checkedEmail && (
        <td
          className="table_td_align"
          onClick={() => history.push(`/customers/${customer?.id}`)}
        >
          {customer?.email}
        </td>
      )}
      {checkedCompany && (
        <td
          className="table_td_align"
          onClick={() => history.push(`/customers/${customer?.id}`)}
        >
          {customer?.company}
        </td>
      )}
      {checkedJobTitle && (
        <td
          className="table_td_align"
          onClick={() => history.push(`/customers/${customer?.id}`)}
        >
          {customer?.job_title}
        </td>
      )}
      {checkedWorkNumber && (
        <td
          className="table_td_align"
          onClick={() => history.push(`/customers/${customer?.id}`)}
        >
          {customer?.work_number}
        </td>
      )}
    </tr>
  );
};

export default SingleCustomer;
