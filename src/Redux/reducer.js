import {
  GO_TO_PAGE
} from "./actionTypes.js";

const initialState = {
  contentPage: "Home",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GO_TO_PAGE:
      return { ...state, contentPage: action.payload ;}
    default:
        return state;
  }
