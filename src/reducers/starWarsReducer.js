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
      return {
        ...state,
        fetchStatus: true
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        fetchStatus: false,
        characters: [...state.characters, action.payload]
      };

    case FETCH_FAILURE:
      return {
        fetchStatus: false,
        error: "Fetch failed"
      };

    default:
      return state;
  }
};
