import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const ADD_NOTE = "ADD_NOTE";
export const FETCH_NOTES = "FETCH_NOTES";
export const HANDLE_DELETE = "HANDLE_DELETE";

export const userlogin = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export let noteId;

export const addNote = (note) => async (dispatch) => {
  try {
    let response = await axios.post(
      `https://notes-app-c727b-default-rtdb.firebaseio.com/notes.json`,
      {
        note,
        timeStamp: Date.now(),
      }
    );
    noteId = response.data.name;
    // dispatch({ type: ADD_NOTE, payload: noteId });
    return noteId;
  } catch (error) {
    console.error("add note error", error);
  }
};

export let notes;

export const fetchNotes = () => async (dispatch) => {
  try {
    let response = await axios.get(
      `https://notes-app-c727b-default-rtdb.firebaseio.com/notes.json`
    );
    notes = response.data;
    return notes;
    // console.log(response.data);
    // dispatch({ type: FETCH_NOTES, payload: response.data });
  } catch (error) {
    console.log(error, "fetching notes error");
  }
};

export const handleDelete = (id) => async (dispatch) => {
  try {
    let response = await axios.delete(
      `https://notes-app-c727b-default-rtdb.firebaseio.com/notes/${id}.json`
    );
    console.log(response, "by delete");
  } catch (error) {
    console.log(error, "delete error");
  }
};
