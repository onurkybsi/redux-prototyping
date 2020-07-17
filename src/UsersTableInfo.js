import React, { Component } from "react";

export default class UsersTableInfo extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email address</th>
            <th scope="col">Password</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <button type="button" className="btn btn-primary">
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                style={{ marginLeft: "5px" }}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
