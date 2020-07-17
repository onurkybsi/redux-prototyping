import { INSERT, UPDATE, DELETE } from "./modelActionTypes";
import { dataSets } from "../dataSets";

export default function (dataSet, action) {
  switch (action.type) {
    case INSERT:
      return {
        ...dataSet,
        [action.model]: dataSet[action.model].concat([action.payload]),
      };
    case UPDATE:
      return {
        ...dataSet,
        [action.model]: dataSet[action.model].map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };
    case DELETE:
      return {
        ...dataSet,
        [action.model]: dataSet[action.model].filter(
          (e) => e.id !== action.payload
        ),
      };
    default:
      return dataSet || dataSets[action.model];
  }
}
