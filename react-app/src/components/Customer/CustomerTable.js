import React from "react";
import { useSelector } from "react-redux";

const CustomerTable = () => {
  const customersObj = useSelector((state) => state.customers);
  const customers = Object?.values(customersObj);
  console.log(
    "🚀 ~ file: CustomerTable.js ~ line 7 ~ CustomerTable ~ customers",
    customers
  );

  // const [checkedFirstName, setCheckedFirstName] = useState(true);
  // const [checkedLastName, setCheckedLastName] = useState(true);
  // const [checkedDisplayName, setCheckedDisplayName] = useState(true);
  // const [checkedAddress, setCheckedAddress] = useState(true);
  // const [checkedMobileNumber, setCheckedMobileNumber] = useState(true);
  // const [checkedHomeNumber, setCheckedHomeNumber] = useState(true);
  // const [checkedEmail, setCheckedEmail] = useState(true);
  // const [checkedCompany, setCheckedCompany] = useState(true);
  // const [checkedJobTitle, setCheckedJobTitle] = useState(true);
  // const [checkedWorkNumber, setCheckedWorkNumber] = useState(true);

  // const states = {
  //   checkedFirstName,
  //   checkedLastName,
  //   checkedDisplayName,
  //   checkedAddress,
  //   checkedMobileNumber,
  //   checkedHomeNumber,
  //   checkedEmail,
  //   checkedCompany,
  //   checkedJobTitle,
  //   checkedWorkNumber,
  // };
  return (
    <table>
      <thead>
        <tr>
          <input type="checkbox" />
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Mobile Number</th>
          <th>Home Number</th>
          <th>Email</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <input type="checkbox" />
            <td>{customer.first_name}</td>
            <td>{customer.last_name}</td>
            <td>
              {customer.addresses[0].street +
                " " +
                customer.addresses[0].city +
                " " +
                customer.addresses[0].state +
                " " +
                customer.addresses[0].postal_code}
            </td>
            <td>{customer.mobile_number}</td>
            <td>{customer.home_number}</td>
            <td>{customer.email}</td>
            <td>{customer.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerTable;
