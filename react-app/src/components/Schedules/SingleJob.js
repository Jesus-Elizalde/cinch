import React from "react";
import { NavLink } from "react-router-dom";
// import { DateTime } from "luxon";

const SingleJob = ({ states, job, checkboxState, business }) => {
  const user = business?.customers.filter(
    (customer) => customer.id === job?.customer_id
  );
  const { deleteArr, setDeleteArr } = checkboxState;

  const { checkedFromDate, checkedToDate, checkedMessage, checkedCustomer } =
    states;

  const addOneJob = (e) => {
    if (!e.target.checked) {
      setDeleteArr(deleteArr.filter((id) => id !== job.id));
    } else {
      setDeleteArr([...deleteArr, job.id]);
    }
  };

  return (
    <tr className="table_row">
      <input
        type="checkbox"
        value={deleteArr.includes(job.id)}
        checked={deleteArr.includes(job.id)}
        onChange={addOneJob}
      />
      {checkedCustomer && (
        <td>
          <NavLink to={`/customers/${user[0]?.id}`}>
            {user[0]?.display_name}
          </NavLink>
        </td>
      )}
      {checkedFromDate && <td>{job?.from_date_time}</td>}
      {checkedToDate && <td>{job?.to_date_time}</td>}
      {checkedMessage && <td>{job?.message}</td>}
    </tr>
  );
};

export default SingleJob;
