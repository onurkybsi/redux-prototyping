import { SET_SELECTED_USER_ID } from "./stateActions";
import { dataSets } from "../dataSets";

export default function (dataSet, action) {
  switch (action.type) {
    case SET_SELECTED_USER_ID:
      return {
        ...dataSet,
        selectedUserId: action.payload,
      };
    default:
      return dataSet || dataSets.stateData;
  }
}
