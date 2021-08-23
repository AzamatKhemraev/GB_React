import { API_URL } from "../../constants";

export const GET_SW = "SW::GET_GISTS";
export const GET_SW_REQUEST = "SW::GET_SW_REQUEST";
export const GET_SW_SUCCESS = "SW::GET_SW_SUCCESS";
export const GET_SW_FAILURE = "SW::GET_SW_FAILURE";

export const getGist = () => ({
  type: GET_SW,
});

export const getSWRequest = () => ({
  type: GET_SW_REQUEST,
});

export const getSWSeccess = (data) => ({
  type: GET_SW_SUCCESS,
  payload: data,
});

export const getSWFailure = (err) => ({
  type: GET_SW_FAILURE,
  payload: err,
});

export const getAllSW = () => async (dispatch) => {
  dispatch(getSWRequest());

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result = await response.json();
    dispatch(getSWSeccess(result));
  } catch (err) {
    dispatch(getSWFailure(err.message));
  }
};
