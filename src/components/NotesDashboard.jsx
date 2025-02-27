import React from "react";
import NoteForm from "./NoteForm";
import NotesList from "./NotesList";

const NotesDashboard = () => {
  return (
    <div>
      <button onClick={() => localStorage.removeItem("login_token")}>
        Logout
      </button>
      <NoteForm />
      <NotesList />
    </div>
  );
};

export default NotesDashboard;
