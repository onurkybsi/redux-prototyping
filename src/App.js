import React from "react";
import "./App.css";
import { UsersTableInfo } from "./UsersTableInfo";
import { Form } from "./Form";
import { Provider } from "react-redux";
import dataSets from "./store";

function App() {
  return (
    <Provider store={dataSets}>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Form />
          </div>
          <div className="col-sm">
            <UsersTableInfo />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
