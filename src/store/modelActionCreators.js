import { DELETE } from "./modelActionTypes";

export const saveEntity = (actionType, model, payload) => {
  return {
    type: actionType,
    model: model,
    payload: payload,
  };
};

export const deleteEntity = (model, object) => ({
  type: DELETE,
  model: model,
  payload: object,
});
