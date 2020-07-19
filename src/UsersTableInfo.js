import React, { Component } from "react";
import { connect } from "react-redux";
import { saveEntity, deleteEntity, setSelectedUserId } from "./store";
import { USERS } from "./store/models";

const mapStateToProps = (dataSets) => ({
  users: dataSets.modelData[USERS],
  stateData: dataSets.stateData,
});

const mapDispatchToProps = {
  saveUser: saveEntity,
  deleteEntity: deleteEntity,
  setSelectedUserId: setSelectedUserId,
};

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const UsersTableInfo = connectFunction(
  class extends Component {
    deleteUser = (user) => {
      this.props.deleteEntity(USERS, user.id);
    };

    editUser = (user) => {
      this.props.setSelectedUserId(user.id);
    };

    render() {
      return (
        <div>
          <div
            style={{
              height: "500px",
              overflow: "auto",
            }}
          >
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
                {this.props.users?.map((user, i) => (
                  <tr key={user.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => this.editUser(user)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        style={{ marginLeft: "5px" }}
                        onClick={() => this.deleteUser(user)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            type="button"
            className="btn btn-success"
            style={{ float: "right" }}
          >
            Create
          </button>
        </div>
      );
    }
  }
);
