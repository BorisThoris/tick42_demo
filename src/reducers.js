import { combineReducers } from "redux";
import MainReducer from "./duck";

const rootReducer = combineReducers({
  home: MainReducer,
});

export default rootReducer;
