import { createStore } from "redux";
import modelReducer from "./modelReducer";

export default createStore(modelReducer);
export { saveEntity, deleteEntity } from "./modelActionCreators";
