import { ADD_NOTE } from "./actions";

const initialState = {
  notes: [],
  loading: false,
  error: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};
