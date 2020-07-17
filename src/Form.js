import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <form>
        <div classNameName="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="checkbox" />
          <label className="form-check-label" for="checkbox">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
