const GET_CUSTOMERS = "customer/GET_CUSTOMERS";
const EDIT_CUSTOMER = "customer/EDIT_CUSTOMER";
// const DELETE_CUSTOMER = "customer/DELETE_CUSTOMER";

const getCustomers = (customers) => ({
  type: GET_CUSTOMERS,
  customers,
});

// const editCustomer = (customer) => ({
//   type: EDIT_CUSTOMER,
//   customer,
// });

// const deleteCustomer = (customerId) => ({
//   type: DELETE_CUSTOMER,
//   customerId,
// });

export const getCustomersDetails = () => async (dispatch) => {
  const response = await fetch("/api/customers/");
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
    dispatch(getCustomers(data));
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_CUSTOMERS:
      newState = { ...state };
      action.customers.forEach(
        (customer) => (newState[customer.id] = customer)
      );
      return newState;
    case EDIT_CUSTOMER:
      newState = { ...state };
      newState[action.customer] = action.customer;
      return newState;
    default:
      return state;
  }
}
