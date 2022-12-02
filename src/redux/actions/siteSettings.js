import { NAVIGATION, SEARCH, WALLET } from "./type";

export const navigationToggle = (value) => (dispatch) => {
  dispatch({ type: NAVIGATION, payload: value });
};
export const walletToggle = (value) => (dispatch) => {
  dispatch({ type: WALLET, payload: value });
};
export const searchToggle = (value) => (dispatch) => {
  dispatch({ type: SEARCH, payload: value });
};
