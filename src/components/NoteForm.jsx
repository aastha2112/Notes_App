import React, { useState } from "react";
import { addNote } from "../redux/actions";

const NoteForm = () => {
  const [note, setNote] = useState("");
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        margin: "20px",
        justifySelf: "center",
      }}
    >
      <input
        style={{ width: "500px" }}
        type="text"
        placeholder="Add note here"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button
        style={{ color: "white", backgroundColor: "green" }}
        onClick={addNote(note)}
      >
        Add
      </button>
    </div>
  );
};

export default NoteForm;
