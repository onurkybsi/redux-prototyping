import React from "react";
import "./App.css";
import Form from "./Form";
import { UsersTableInfo } from "./UsersTableInfo";
import { Provider } from "react-redux";
import dataSets  from "./store";

function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <Form />
        </div>
        <div class="col-sm">
          <Provider store={dataSets}>
            <UsersTableInfo />
          </Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
