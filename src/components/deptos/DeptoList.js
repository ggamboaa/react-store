import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DeptosList = ({ deptos }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Code</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {deptos.map((depto) => {
        return (
          <tr key={depto.id}>
            <td>
              <a
                className="btn btn-light"
                href={"http://pluralsight.com/deptos/" + depto.id}
              >
                Watch
              </a>
            </td>
            <td>
              <Link to={"/depto/" + depto.id}>{depto.code}</Link>
            </td>
            <td>{depto.desc}</td>
            <td>{depto.status}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

DeptosList.propTypes = {
  deptos: PropTypes.array.isRequired,
};

export default DeptosList;
