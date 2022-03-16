import { combineReducers } from "redux";
import { burgerReducer } from "./burgerReducer/reducer";

export const rootReducer = combineReducers({
  burgerReducer,
});
