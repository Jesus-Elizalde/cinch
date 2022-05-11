const GET_BUSINESSES = "business/GET_BUSINESSES";

const getBusinesses = (businesses) => ({
  type: GET_BUSINESSES,
  businesses,
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

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_BUSINESSES:
      const newState = { ...state };
      action.businesses.forEach(
        (business) => (newState[business.id] = business)
      );
      return newState;
    default:
      return state;
  }
}
