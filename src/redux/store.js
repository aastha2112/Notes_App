import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { authReducer } from "./authReducer";
import { notesReducer } from "./notesReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  notes: notesReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
