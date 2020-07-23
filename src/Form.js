import React, { Component } from "react";
import { connect } from "react-redux";
import {
  saveEntity,
  deleteEntity,
  setProcessType,
  setSelectedUser,
} from "./store";
import { USERS } from "./store/models";

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

    render() {
      return (
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
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      );
    }
  }
);
