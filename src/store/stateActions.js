export const SET_SELECTED_USER_ID = "set_selected_user_id";

export const setSelectedUserId = (userId) => ({
  type: SET_SELECTED_USER_ID,
  payload: userId,
});
