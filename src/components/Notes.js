import React, { useContext, useState, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import EditNote from "./EditNote";

export default function Notes() {
  const  {notes,getNote}  = useContext(noteContext);
  const [mode, setMode] = useState("none");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [noteContent, setNoteContent] = useState({
    _id: ``,
    title: ``,
    description: ``,
    tag: ``,
  });
  const handleClickClose = () => {
    setMode("none");
    document.body.style.overflow = "auto";
  };
  const handleClickEdit = (note) => {
    setNoteContent(note);
    setScrollPosition(window.scrollY);
    setMode("flex");
    document.body.style.overflow = "hidden";
  };
  useEffect(() => {
    getNote();
    // eslint-disable-next-line
    console.log(notes);
  }, []);
  return (
    <>
      <style>
        {`
          .Notes {
            display:flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
          }
        .EditNote{
            background-color:rgba(0,0,0,0.4);
            height:100%;
            width:100%;
            position: absolute;
            display:${mode};
            justify-content: center;  
            align-items:center;
            top:${scrollPosition}px;;
          left:0;
          z-index:2;
          }
        .EditPanel{
          height: 95%;
          width: 70%;
          overflow:auto;
          background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        
            padding: 20px;
            margin: 20px;
            transition: all 0.3s ease;
        }
        `}
      </style>
      <div className="EditNote">
        <div className="EditPanel">
          <EditNote
            noteContent={noteContent}
            handleClickClose={handleClickClose}
          />
          <button onClick={handleClickClose}>Close</button>
        </div>
      </div>
      <div className="Notes">
        
        {notes.map((note) => {
          return (
            <NoteItem
              key={note._id}
              note={note}
              handleClickEdit={() => {
                handleClickEdit(note);
              }}
            />
          );
        })}
      </div>
    </>
  );
}
