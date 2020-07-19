import { dataSets } from "../dataSets";
import { SET_PROCESS_TYPE, SET_SELECTED_USER } from "./stateActions";

export default function (dataSet, action) {
  switch (action.type) {
    case SET_PROCESS_TYPE:
      return {
        ...dataSet,
        processType: action.payload,
      };
    case SET_SELECTED_USER:
      return {
        ...dataSet,
        selectedUser: action.payload,
      };
    default:
      return dataSet || dataSets.stateData;
  }
}
