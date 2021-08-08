import { toggleShowName } from "./actions";

const TOGGLE_SHOW_NAME = toggleShowName.type;

const initialState = {
  showName: false,
  name: "Azamat Khemraev",
};

const profileReducer = (state = initialState, action) => {
  switch (toggleShowName.type) {
    case TOGGLE_SHOW_NAME:
      return {
        ...state,
        showName: !state.showName,
      };
    default:
      return state;
  }
};

export default profileReducer;
