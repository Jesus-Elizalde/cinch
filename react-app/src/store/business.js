const GET_BUSINESS = "business/GET_BUSINESS";
const EDIT_BUSINESS = "business/EDIT_BUSINESSES";

const getBusiness = (business) => ({
  type: GET_BUSINESS,
  business,
});

const editBusiness = (business) => ({
  type: EDIT_BUSINESS,
  business,
});

export const getBusinessDetails = () => async (dispatch) => {
  const response = await fetch(`/api/business/`);
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
    dispatch(getBusiness(data));
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

export const editCustomer = (customer) => async (dispatch) => {
  const response = await fetch(`/api/customers/${customer["id"]}`, {
    method: "PUT",
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
    case GET_BUSINESS:
      newState = { ...state };
      action.business.forEach((business) => (newState[business.id] = business));
      return newState;
    case EDIT_BUSINESS:
      newState = { ...state };
      newState[action.business] = action.business;
      return newState;
    default:
      return state;
  }
}
