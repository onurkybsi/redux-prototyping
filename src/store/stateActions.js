export const SET_PROCESS_TYPE = "set_process_type";
export const SET_SELECTED_USER = "set_selected_user";

export const setProcessType = (processType) => ({
  type: SET_PROCESS_TYPE,
  payload: processType,
});

export const setSelectedUser = (user) => ({
  type: SET_SELECTED_USER,
  payload: user,
});
