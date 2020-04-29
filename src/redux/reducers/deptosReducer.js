import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function deptoReducer(state = initialState.deptos, action) {
  switch (action.type) {
    case types.CREATE_DEPTO:
      return [...state, { ...action.depto }];
    case types.LOAD_DEPTOS_SUCCESS:
      return action.deptos;
    default:
      return state;
  }
}
