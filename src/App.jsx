import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NotesDashboard from "./components/NotesDashboard";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import auth from "./firebase/firebaseConfig.js";
import app from "./firebase/firebaseConfig.js";
import { userlogin } from "./redux/actions.js";
const App = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const user =
    useSelector((state) => state.auth.user) || localStorage.getItem("user");
  const provider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User signed in:", result.user);
        localStorage.setItem(
          "login_token",
          JSON.stringify(result.user.accessToken)
        );
        dispatch(userlogin(result.user));
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <div>
      <h2>Collaborative notes</h2>
      {user ? (
        <NotesDashboard />
      ) : (
        <div>
          <h3>Login</h3>
          <button onClick={handleLogin}>Login with Google</button>
        </div>
      )}
    </div>
  );
};

export default App;
