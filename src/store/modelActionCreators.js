import { INSERT, UPDATE, DELETE } from "./modelActionTypes";

let id = 5;

export const saveEntity = (model, payload) => {
  if (!payload.id) {
    return {
      type: INSERT,
      model: model,
      payload: {
        ...payload,
        id: id++,
      },
    };
  } else {
    return {
      type: UPDATE,
      model: model,
      payload: payload,
    };
  }
};

export const deleteEntity = (model, object) => ({
  type: DELETE,
  model: model,
  payload: object.id,
});
