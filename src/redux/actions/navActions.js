import * as types from "./actionTypes";

export const navClick = (data) => ({
  type: types.NAV_CLICK,
  payload: {
    title: data.title,
  },
});
