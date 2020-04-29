import * as types from "./actionTypes";
import * as deptoApi from "../../api/deptoApi";

export function createDepto(depto) {
  return { type: types.CREATE_DEPTO, depto };
}

export function loadDeptosSuccess(deptos) {
  return { type: types.LOAD_DEPTOS_SUCCESS, deptos };
}

export function loadDeptos() {
  return function (dispatch) {
    return deptoApi
      .getDeptos()
      .then((deptos) => {
        dispatch(loadDeptosSuccess(deptos.records));
      })
      .catch((error) => {
        throw error;
      });
  };
}
