import React, { useState, useEffect } from "react";
const NewNote = (props) => {
  let [note, setNote] = useState({});
  let createNote = (e) => {
    let new_note = { ...note };
    new_note.body = e.target.value;
    new_note.created = new Date().toLocaleDateString();
    new_note.updated = new Date().toLocaleDateString();
    setNote(new_note);
  };
  let saveNote = async () => {
    if(note.body){
      await fetch(`http://localhost:3002/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...note }),
    });
    }
    props.history.goBack();
  };
  return (
    <div className="container-fluid bg-dark main">
      <div className="col-md-6 col-sm-12 mx-auto shadow">
        <h3 className="text-light py-3 shadow">Notes list</h3>
        <div className="d-flex justify-content-between">
          <button className="btn btn-sm btn-secondary m-4" onClick={saveNote}>
          <i className="fa-solid fa-arrow-left text-light"></i>
          </button>
          <button className="btn btn-sm btn-success m-4" onClick={saveNote}>
            Done
          </button>
        </div>
        <textarea
          value={note?.body}
          onChange={(e) => createNote(e)}
          className="mx-auto"
        ></textarea>
      </div>
    </div>
  );
};

export default NewNote;
