import "./App.css";
import React from "react";
import Notes from "./components/notes";
import Note from "./components/note";
import NewNote from "./components/newNote";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Route path="/" exact component={Notes} />
      <Route path="/note/:id" component={Note} />
      <Route path="/note" component={NewNote} />
    </Router>
  );
}
