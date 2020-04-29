import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import deptos from "./deptosReducer";

const rootReducer = combineReducers({
  deptos,
  courses,
  authors,
});

export default rootReducer;
