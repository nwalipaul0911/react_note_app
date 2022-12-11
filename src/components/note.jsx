import React, { useEffect, useState } from "react";
const Note = (props) => {
  let [note, setNote] = useState({});
  let noteId = props.match.params.id;
  useEffect(() => {
    getNote();
  }, []);
  let getNote = async () => {
    const api = await fetch(`http://localhost:3002/notes/${noteId}`);
    const result = await api.json();
    setNote(result);
  };
  let updateNote = async () => {
    await fetch(`http://localhost:3002/notes/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    props.history.goBack();
  };
  let handleSubmit = () => {
    if(note.body.length > 0){
      updateNote();
    }
    else{
      handleDelete();
    }
  };
  let handleDelete = async () => {
    await fetch(`http://localhost:3002/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    props.history.goBack();
  };

  return (
    <div className="container-fluid bg-dark main">
      <div className="col-md-6 col-sm-12 mx-auto shadow">
        <h3 className="text-light py-3 shadow">Notes list</h3>
        
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-sm btn-secondary m-4"
            onClick={handleSubmit}
          >
            <i className="fa-solid fa-arrow-left text-light"></i>
          </button>
          <button className="btn btn-sm btn-danger m-4" onClick={handleDelete}>
            Delete
          </button>
        </div>

        <textarea
          value={note?.body}
          onChange={(e) => setNote({ ...note, body: e.target.value })}
          className="mx-auto"
        ></textarea>
      </div>
    </div>
  );
};

export default Note;
