const GET_BUSINESSES = "business/GET_BUSINESSES";
const EDIT_BUSINESS = "business/EDIT_BUSINESSES";
const DELETE_CUSTOMER = "business/DELETE_CUSTOMER";

const getBusinesses = (businesses) => ({
  type: GET_BUSINESSES,
  businesses,
});

const editBusiness = (business) => ({
  type: EDIT_BUSINESS,
  business,
});

export const getBusinessesDetails = () => async (dispatch) => {
  const response = await fetch(`/api/businesses/`);
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
    dispatch(getBusinesses(data));
  }
};

export const newCustomer = (customer) => async (dispatch) => {
  const response = await fetch("/api/customers/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customer),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(editBusiness(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again"];
  }
};

export const deleteCustomer = (id) => async (dispatch) => {
  const response = await fetch(`/api/customers/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(editBusiness(data));
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_BUSINESSES:
      newState = { ...state };
      action.businesses.forEach(
        (business) => (newState[business.id] = business)
      );
      return newState;
    case EDIT_BUSINESS:
      newState = { ...state };
      newState[action.business] = action.business;
      return newState;
    default:
      return state;
  }
}
