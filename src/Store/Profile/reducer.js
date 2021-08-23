import { PROFILE_CHANGE_NAME } from "./actions";

// const TOGGLE_SHOW_NAME = toggleShowName.type;

const initialState = {
  showName: false,
  name: "No name",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
