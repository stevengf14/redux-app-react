import * as types from "./actionTypes";

export const storeAll = (data) => ({
  type: types.STORE_ALL,
  payload: {
    list: data.list,
    loading: data.loading,
  },
});
