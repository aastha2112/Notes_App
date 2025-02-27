import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes, notes } from "../redux/actions";

const NotesList = () => {
  const dispatch = useDispatch();
  dispatch(fetchNotes());
  let notesArr = notes
    ? Object.entries(notes).map(([id, val]) => ({ id, ...val }))
    : [];
  console.log(notesArr);

  const handleDelete = (id) => {
    notesArr.filter((el) => el.id !== id);
    console.log("deleted");
    dispatch(handleDelete(id));
  };
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#F5F5F5",
        width: "50%",
        margin: "1rem auto",
      }}
    >
      <ul>
        {notesArr.map((el) => (
          <div
            key={el.id}
            style={{
              padding: "1rem",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              background: "#F9F9F9",
              borderRadius: "1rem",
              margin: "10px",
            }}
          >
            <h3>{el.note}</h3>
            <p>{el.timeStamp}</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button style={{ color: "white", backgroundColor: "#FEC00A" }}>
                Edit
              </button>
              <button
                style={{ color: "white", backgroundColor: "red" }}
                onClick={() => handleDelete(el.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
