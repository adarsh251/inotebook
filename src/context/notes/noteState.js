import React, { useContext, useState } from "react";
import noteContext from "./noteContext";
import authContext from "../user/authContext";
const NoteState = (props) => {
  const [notes, setNote] = useState([]);


  const {user}=useContext(authContext);
  const getNote = async () => {
    try {
      //console.log(user.accessToken+"+"+user.name);
      //const token = localStorage.getItem("token");
      //console.log(token);
      const response = await fetch("/notes/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      const json = await response.json();
      //console.log([...json]);
      setNote(json);
    } catch (err) {
      //console.log("-------------");
      console.error(err);
    }
  };



  const addNote = async (title, description, tag) => {
    //console.log("added");
    const note = {
      title: `${title}`,
      description: `${description}`,
      tag: `${tag}`,
    };
    try {
      //const token = localStorage.getItem("token");
      //console.log(token);
      const response = await fetch("/notes/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify({
          title: `${title}`,
          description: `${description}`,
          tag: `${tag}`,
        }),
      });
      console.log(response);
      setNote([...notes, note]);
      console.log(notes);
    } catch (err) {
      //console.log("-------------");
      console.error(err);
    }
    console.log(notes);
  };


  const updateNote = async (note) => {
    try {
      //const token = localStorage.getItem("token");
      //console.log(token);
      await fetch(`/notes/update/${note._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify({
          title: `${note.title}`,
          description: `${note.description}`,
          tag: `${note.tag}`,
        }),
      });
      //console.log(response);
    } catch (err) {
      console.log(err);
    }
    const newNotes = notes.map((item) => {
      if (item._id !== note._id) {
        return item;
      } else {
        return note;
      }
    });
    setNote([...newNotes]);
  };



  const deleteNote = async (id) => {
    //const token = localStorage.getItem("token");
    try {
      await fetch(`/notes/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      //console.log(response);
    } catch (err) {
      console.log(err);
    }
    const newNotes = notes.filter((item) => {
      return item._id !== id;
    });
    //console.log(id);
    setNote([...newNotes]);
    //console.log("deleted");
    //console.log(notes);
  };
  return (
    <noteContext.Provider
      value={{ notes, getNote, addNote, deleteNote, updateNote }}
    >
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;
