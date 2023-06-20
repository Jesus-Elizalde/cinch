import React from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import ProtectedRoute from "../auth/ProtectedRoute";
import CustomerEditSidebar from "./CustomerEditSidebar";
import SingleCustomer from "./SingleCustomer";

const CustomerTable = () => {
  const customersObj = useSelector((state) => state.customers);
  const customers = Object?.values(customersObj);

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
          <SingleCustomer customer={customer} key={customer.id} />
        ))}
      </tbody>
      <Switch>
        <ProtectedRoute path={"/customers/:id"} exact={true}>
          <CustomerEditSidebar />
        </ProtectedRoute>
      </Switch>
    </table>
  );
};

export default CustomerTable;
