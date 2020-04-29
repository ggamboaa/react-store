import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/department/";

export function getDeptos() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveDepto(depto) {
  return fetch(baseUrl + (depto.id || ""), {
    method: depto.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(depto),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteDepto(deptoId) {
  return fetch(baseUrl + deptoId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
