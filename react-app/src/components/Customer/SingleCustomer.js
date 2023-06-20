import React from "react";
import { useHistory } from "react-router-dom";

const SingleCustomer = ({ customer }) => {
  const history = useHistory();
  return (
    <tr key={customer.id}>
      <input type="checkbox" />

      <td onClick={() => history.push(`/customers/${customer.id}`)}>
        {customer.first_name}
      </td>

      <td onClick={() => history.push(`/customers/${customer.id}`)}>
        {customer.last_name}
      </td>
      <td onClick={() => history.push(`/customers/${customer.id}`)}>
        {customer.addresses[0].street +
          " " +
          customer.addresses[0].city +
          " " +
          customer.addresses[0].state +
          " " +
          customer.addresses[0].postal_code}
      </td>
      <td onClick={() => history.push(`/customers/${customer.id}`)}>
        {customer.mobile_number}
      </td>
      <td onClick={() => history.push(`/customers/${customer.id}`)}>
        {customer.home_number}
      </td>
      <td onClick={() => history.push(`/customers/${customer.id}`)}>
        {customer.email}
      </td>
      <td onClick={() => history.push(`/customers/${customer.id}`)}>
        {customer.note}
      </td>
    </tr>
  );
};

export default SingleCustomer;
