const GET_CATEGORIES = "category/GET_CATEGORIES";

const getCategories = (categories) => ({
  type: GET_CATEGORIES,
  categories,
});

export const getCategoriesDetails = () => async (dispatch) => {
  const response = await fetch("/api/categories/");
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
    dispatch(getCategories(data));
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_CATEGORIES:
      newState = { ...state };
      action.categories.forEach(
        (category) => (newState[category.id] = category)
      );
      return newState;
    default:
      return state;
  }
}
