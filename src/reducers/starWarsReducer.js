import {
  FETCH_DATA,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "../actions";

const initialState = {
  characters: [],
  fetchStatus: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return state;

    case FETCH_SUCCESS:
      return state;

    case FETCH_FAILURE:
      return state;

    default:
      return state;
  }
};
