import React, { useContext, useState, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import EditNote from "./EditNote";

export default function Notes(props) {
  const { style } = props;
  const { notes, getNote } = useContext(noteContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteContent, setNoteContent] = useState({
    _id: ``,
    title: ``,
    description: ``,
    tag: ``,
  });
  const handleClickClose = () => {
    //setMode("none");
    document.body.style.overflow = "auto";
    setIsModalOpen(false);
  };
  const handleClickEdit = (note) => {
    setNoteContent(note);
    //setMode("flex");
    document.body.style.overflow = "hidden";
    setIsModalOpen(true);
  };
  useEffect(() => {
    getNote();
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
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 999;
          }
        .EditPanel{
          position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: ${style.mid};
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            width: 60%;
            height: 80%;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            text-align:center;
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
      {isModalOpen && (
        <>
      <div className="EditNote" onClick={handleClickClose}></div>
        <div className="EditPanel">
          <EditNote
            style={props.style}
            noteContent={noteContent}
            handleClickClose={handleClickClose}
          />
        </div>
      
      </>
      )}
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
