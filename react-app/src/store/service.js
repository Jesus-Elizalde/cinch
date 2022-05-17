const GET_SERVICES = "service/GET_SERVICES";

const getServices = (services) => ({
  type: GET_SERVICES,
  services,
});

export const getServicesDetails = () => async (dispatch) => {
  const response = await fetch("/api/services/");
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
    dispatch(getServices(data));
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_SERVICES:
      newState = { ...state };
      action.services.forEach((service) => (newState[service.id] = service));
      return newState;
    default:
      return state;
  }
}
