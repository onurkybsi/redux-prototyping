import React, { Component } from "react";
import { connect } from "react-redux";
import {
  saveEntity,
  deleteEntity,
  setProcessType,
  setSelectedUser,
} from "./store";
import { USERS } from "./store/models";
import { UPDATE_PROCESS, CREATE_PROCESS } from "./store/processType";

const mapStateToProps = (dataSets) => ({
  users: dataSets.modelData[USERS],
  stateData: dataSets.stateData,
});

const mapDispatchToProps = {
  saveUser: saveEntity,
  deleteEntity: deleteEntity,
  setProcessType: setProcessType,
  setSelectedUser: setSelectedUser,
};

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const UsersTableInfo = connectFunction(
  class extends Component {
    deleteUser = (user) => {
      let nextId = this.props.stateData.selectedUser.id + 1;
      this.props.deleteEntity(USERS, user.id);

      this.props.setSelectedUser({
        id: nextId + 1,
        email: "",
        password: "",
      });
    };

    editUser = (user) => {
      this.props.setProcessType(UPDATE_PROCESS);
      this.props.setSelectedUser(user);
    };

    createUser = () => {
      this.props.setProcessType(CREATE_PROCESS);

      let newUserId = -1;
      this.props.users.forEach((user) => {
        newUserId = user.id > newUserId ? user.id : newUserId;
      });

      this.props.setSelectedUser({
        id: newUserId + 1,
        email: "",
        password: "",
      });
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
                  <tr
                    key={user.id}
                    style={{
                      borderLeft:
                        user.id === this.props.stateData.selectedUser?.id
                          ? "3px solid #5A6268"
                          : "",
                    }}
                  >
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
            onClick={this.createUser}
          >
            Create
          </button>
        </div>
      );
    }
  }
);
