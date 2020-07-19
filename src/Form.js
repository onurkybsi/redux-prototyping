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
    constructor(props) {
      super(props);

      this.state = {
        email: "",
      };
    }

    changeInputValue = (e) => {
      this.setState({
        ...this.state,
        email: e.target.value,
      });
    };

    render() {
      return (
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.changeInputValue}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
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
