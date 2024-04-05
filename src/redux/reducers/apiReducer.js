import * as types from "../actions/actionTypes";

const initialState = {
  list: [],
};

const apiState = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_ALL: {
      return {
        ...state,
        list: action.payload.list,
      };
    }
    default:
      return state;
  }
};

export default apiState;
