import React from "react";

const CustomerTable = () => {
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
          <th>Display Name</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Mobile Number</th>
          <th>Home Number</th>
          <th>Email</th>
          <th>Company</th>
          <th>Job Title</th>
          <th>Work Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>testing</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CustomerTable;
