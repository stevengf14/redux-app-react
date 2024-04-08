import * as types from "./actionTypes";

export const storeAll = (data) => ({
  type: types.STORE_ALL,
  payload: {
    list: data.list,
    loading: data.loading,
  },
});

export const sendingRequest = () => ({
  type: types.SENDING_REQUEST,
  payload: {
    loading: true,
  },
});

export const requestSuccess = (data) => ({
  type: types.REQUEST_SUCCESS,
  payload: {
    list: data.list,
    loading: false,
  },
});

export const requestError = (error) => ({
  type: types.REQUEST_ERROR,
  payload: {
    error: error,
    loading: false,
  },
});
