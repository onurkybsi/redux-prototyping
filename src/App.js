import React from "react";
import "./App.css";
import Form from "./Form";
import UsersTableInfo from "./UsersTableInfo"

function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <Form />
        </div>
        <div class="col-sm">
          <UsersTableInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
