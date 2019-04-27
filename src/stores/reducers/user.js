import { actionTypes } from "stores/actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_INFOMATION: {
      const newState = {
        ...state,
        ...action.payload
      };
      console.log("New state", newState);
      return newState;
    }
    default:
      return state;
  }
};
