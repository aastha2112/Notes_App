import axios from "axios";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const ADD_NOTE = "ADD_NOTE";

export const userlogin = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const addNote = (note) => async (dispatch) => {
  try {
    let response = await axios.post(
      `https://notes-app-c727b-default-rtdb.firebaseio.com/notes.json`,
      {
        note,
        timeStamp: Date.now(),
      }
    );
    const noteId = response.data.name;
    dispatch({ type: ADD_NOTE, payload: noteId });
    return noteId;
  } catch (error) {
    console.error("add note error", error);
  }
};
