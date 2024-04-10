import axios from "axios";
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
    list: data.data,
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

const getData = () => {
  return axios
    .get("http://dev.contanimacion.com/api_tablon/api/mensajes")
    .then((res) => res)
    .catch((error) => error);
};

export const fetchData = () => (dispatch) => {
  dispatch(sendingRequest());
  return getData()
    .then((data) => {
      dispatch(requestSuccess(data));
    })
    .catch((error) => {
      dispatch(requestError(error));
    });
};

// POSTS

export const requestPostSuccess = (data) => ({
  type: types.REQUEST_POST_SUCCESS,
  payload: {
    ok: data.data[0].ok,
    loading: false,
  },
});

const postData = (data) => {
  return axios
    .post("http://dev.contanimacion.com/api_tablon/api/mensajes/add", data)
    .then((res) => res)
    .catch((error) => error);
};

export const sendNew = (data) => (dispatch) => {
  dispatch(sendingRequest());
  return postData(data)
    .then((data) => {
      dispatch(requestPostSuccess(data));
    })
    .catch((error) => {
      dispatch(requestError(error));
    });
};
