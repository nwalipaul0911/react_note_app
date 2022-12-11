import React, { useState, useEffect } from "react";
import "../App.css";
import Note from "./note";
import { Link } from "react-router-dom";
const Notes = () => {
  let [notes, setNote] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);
  const getNotes = async () => {
    let api = await fetch("http://localhost:3002/notes");
    let result = await api.json();
    setNote(result);
  };
  return (
    <>
      <div className="container-fluid bg-dark main">
        <div className="col-md-6 col-sm-12 mx-auto shadow pb-5">
          <h3 className="text-light py-3 shadow">Notes list</h3>

          <i className="fa-solid fa-list text-success fs-2 p-2 m-3"></i>
          
          {notes.map((note, index) => (
            <p key={index} className="text-light ms-4">
              <Link to={`/note/${note.id}`}>{note.body.slice(0,25)}...</Link>
            </p>
          ))}
          <div className="ms-auto fit-content me-3">
            <Link to={"/note"}>
              <span className="bg-success rounded-pill px-3 py-2 mt-3">
              <i className="fa-solid fa-plus"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
