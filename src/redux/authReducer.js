import { LOGIN_SUCCESS } from "./actions";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
