const GET_KEY = "key/GET_KEY";

const getKey = (key) => ({
  type: GET_KEY,
  key,
});

export const getKeyDetails = () => async (dispatch) => {
  const response = await fetch(`/api/key/`);
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
    dispatch(getKey(data));
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_KEY:
      newState = { ...state, ...action.key };

      return newState;

    default:
      return state;
  }
}
