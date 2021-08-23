import { STATUSES } from "../../constants";
import { GET_SW_FAILURE, GET_SW_REQUEST, GET_SW_SUCCESS } from "./actions";

const initialSate = {
  results: [],
  request: STATUSES.IDLE,
  error: null,
};
const swapiReducer = (state = initialSate, action) => {
  switch (action.type) {
    case GET_SW_REQUEST:
      return {
        ...state,
        request: STATUSES.REQUEST,
      };
    case GET_SW_SUCCESS:
      return {
        ...state,
        error: null,
        results: action.payload,
        request: STATUSES.SUCCESS,
      };
    case GET_SW_FAILURE:
      return {
        ...state,
        request: STATUSES.FAILURE,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default swapiReducer;
