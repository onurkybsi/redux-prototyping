import React, { Component } from "react";
import { connect } from "react-redux";
import { saveEntity, deleteEntity } from "./store";
import {USERS} from "./store/models";

const mapStateToProps = (datasets) => {
  users: datasets.users
}

const mapDispatchToProps = {
  saveUser: saveEntity,
  deleteUser: deleteEntity
}

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const UsersTableInfo = connectFunction(class extends Component {
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
            <td>{users[0].email}</td>
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
});
