import { createStore, combineReducers } from "redux";
import modelReducer from "./modelReducer";
import stateReducer from "./stateReducer";

export default createStore(
  combineReducers({
    modelData: modelReducer,
    stateData: stateReducer,
  })
);
export { saveEntity, deleteEntity } from "./modelActionCreators";
export { setProcessType, setSelectedUser } from "./stateActions";
