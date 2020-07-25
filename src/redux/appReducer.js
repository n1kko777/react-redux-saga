import { START_LOADING, END_LOADING, SHOW_ALERT, HIDE_ALERT } from "./types";

const initialState = {
  isLoading: false,
  alert: null,
};

export const appReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case END_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case SHOW_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case HIDE_ALERT:
      return {
        ...state,
        alert: null,
      };

    default:
      return state;
  }
};
