export const PROFILE_CHANGE_NAME = "PROFILE::CHANGE_NAME";

export const changeName = (value) => ({
  type: PROFILE_CHANGE_NAME,
  payload: value,
});
