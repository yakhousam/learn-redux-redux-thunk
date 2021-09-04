import { fetchUserById } from "../api";

export function getUserById(id) {
  return async function (dispatch, getState) {
    try {
      dispatch({ type: "IS_FETCHING" });
      const user = await fetchUserById(id);
      dispatch({ type: "SET_USER", user });
    } catch (error) {
      dispatch({ type: "SET_ERROR", error: error.message });
    }
  };
}
