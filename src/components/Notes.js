import React, { useContext, useState, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import EditNote from "./EditNote";

export default function Notes(props) {
  const { style } = props;
  const { notes, getNote } = useContext(noteContext);
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
    console.log(notes);
    // eslint-disable-next-line
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
            background-color:rgba(0,0,0,0.5);
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
          height: 70%;
          width: 70%;
          overflow:auto;
          background-color: ${style.mid};
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        
            padding: 20px;
            margin: 20px;
            transition: all 0.3s ease;
            position: relative;
        }
        .EditPanel .close{
           position: absolute; /* Changed to absolute positioning */
            top: 10px; /* Adjust as needed */
            right: 10px; /* Adjust as needed */
            border: none;
            background: none;
            font-size: 1.5em;
            cursor: pointer;
            color: ${(style.theme==='dark'?'#FFFFFF':'#000000')};
        }
        `}
      </style>
      <div className="EditNote">
        <div className="EditPanel">
          <button className="close" onClick={handleClickClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x-circle"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </button>
          <EditNote
            style={props.style}
            noteContent={noteContent}
            handleClickClose={handleClickClose}
          />
        </div>
      </div>
      <div className="Notes">
        {notes.map((note) => {
          return (
            <NoteItem
              style={style}
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
