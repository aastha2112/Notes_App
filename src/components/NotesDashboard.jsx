import React from "react";
import NoteForm from "./NoteForm";
import NotesList from "./NotesList";

const NotesDashboard = () => {
  return (
    <div>
      <button
        style={{ color: "white", background: "red" }}
        onClick={() => localStorage.removeItem("user")}
      >
        Logout
      </button>
      <NoteForm />
      <NotesList />
    </div>
  );
};

export default NotesDashboard;
