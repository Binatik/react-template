import { TOGGLE_BURGER } from "./consts";

const initialState = {
  toggle: false, 
};

export const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BURGER:
      return { ...state, toggle: action.payload};
    default:
      return state;
  }
};
