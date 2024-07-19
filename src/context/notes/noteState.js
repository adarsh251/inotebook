import React, { useContext, useState } from "react";
import noteContext from "./noteContext";
import authContext from "./authContext";
const NoteState = (props) => {
  
  // const s1={
  //     "name":"Adarsh",
  //     "class":"a1"
  // }
  // const [state,setState]=useState(s1);
  // const update=()=>{
  //     setTimeout(()=>{
  //         setState({
  //             "name":"mishra",
  //             "class":"a2"
  //         })
  //     },5000);
  // }

  // const note_i=[
  //   {
  //     "_id": "667ec919f52fe34ad212d820",
  //     "user": "667c25e7af80f2a877d3781a",
  //     "title": "Second 1 Node",
  //     "description": "Adding first Note",
  //     "tag": "general",
  //     "date": "2024-06-28T14:30:49.273Z",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "667f0433ac84be10426f7b40",
  //     "user": "667c25e7af80f2a877d3781a",
  //     "title": "note1",
  //     "description": "note1",
  //     "tag": "general",
  //     "date": "2024-06-28T18:42:59.235Z",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "667f0437ac84be10426f7b42",
  //     "user": "667c25e7af80f2a877d3781a",
  //     "title": "note2",
  //     "description": "note1",
  //     "tag": "general",
  //     "date": "2024-06-28T18:43:03.614Z",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "667f043bac84be10426f7b44",
  //     "user": "667c25e7af80f2a877d3781a",
  //     "title": "note3",
  //     "description": "note1",
  //     "tag": "general",
  //     "date": "2024-06-28T18:43:07.478Z",
  //     "__v": 0
  //   }
  // ];
  const [notes, setNote] = useState([]);



  const {user}=useContext(authContext);
  const getNote = async () => {
    try {
      console.log(user.accessToken+"+"+user.name);
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
      console.log([...json]);
      setNote(json);
    } catch (err) {
      console.log("-------------");
      console.error(err);
    }
  };



  const addNote = async (title, description, tag) => {
    console.log("added");
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
      console.log("-------------");
      console.error(err);
    }
    console.log(notes);
  };


  const updateNote = async (note) => {
    try {
      //const token = localStorage.getItem("token");
      //console.log(token);
      const response = await fetch(`/notes/update/${note._id}`, {
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
      console.log(response);
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
      const response = await fetch(`/notes/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    const newNotes = notes.filter((item) => {
      return item._id !== id;
    });
    console.log(id);
    setNote([...newNotes]);
    console.log("deleted");
    console.log(notes);
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
