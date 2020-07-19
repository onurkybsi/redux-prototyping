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

export const Form = connectFunction(
  class extends Component {
    render() {
      let selectedUser = this.props.users[this.props.stateData.selectedUserId - 1];
      return (
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={selectedUser?.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={selectedUser?.password}
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
