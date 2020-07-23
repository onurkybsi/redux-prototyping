import React, { Component } from "react";
import { connect } from "react-redux";
import {
  saveEntity,
  deleteEntity,
  setProcessType,
  setSelectedUser,
} from "./store";
import { USERS } from "./store/models";
import { INSERT, UPDATE } from "./store/modelActionTypes";
import { CREATE_PROCESS, UPDATE_PROCESS } from "./store/processType";

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

export const Form = connectFunction(
  class extends Component {
    changeInputValue = (e) => {
      this.props.setSelectedUser({
        ...this.props.stateData.selectedUser,
        [e.target.name]: e.target.value,
      });
    };

    save = () => {
      let actionType =
        this.props.stateData.processType === CREATE_PROCESS ? INSERT : UPDATE;

      let nextId = this.props.stateData.selectedUser.id + 1;
      this.props.saveUser(actionType, USERS, this.props.stateData.selectedUser);

      this.props.setProcessType(CREATE_PROCESS);
      this.props.setSelectedUser({
        id: nextId + 1,
        email: "",
        password: "",
      });
    };

    render() {
      return (
        <React.Fragment>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={this.props.stateData.selectedUser.email}
                onChange={this.changeInputValue}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={this.props.stateData.selectedUser.password}
                onChange={this.changeInputValue}
              />
            </div>
          </form>
          <button className="btn btn-primary" onClick={this.save}>
            Save
          </button>
        </React.Fragment>
      );
    }
  }
);
