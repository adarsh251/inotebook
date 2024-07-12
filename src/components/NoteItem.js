import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

export default function NoteItem(props) {
  const {deleteNote}=useContext(noteContext);
  const { style, note, handleClickEdit } = props;
  const handleClickDelete = () => {
    deleteNote(note._id);
  };
  return (
    <>
      <style>
        {`
        .note-card {
            
            background-color: ${style.light};
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 30%;
            padding: 20px;
            margin: 20px;
            transition: box-shadow 0.3s ease;
        }
        .note-card:hover {
            box-shadow: 0 0 10px ${(style.theme==='light')?"rgba(0, 0, 0, 0.2)":"rgba(255, 255, 255, 0.2)"};
        }
        .note-card h2 {
            margin: 0;
            margin-bottom: 10px;
        }
        .note-preview {
            height: 80px; /* Adjust this to control the preview height */
            overflow: hidden;
            cursor: pointer;
        }
        .note-card .icons {
            display: flex;
            justify-content: flex-end;
            margin-top: 10px;
        }
        .note-card .icons svg {
            width: 24px;
            height: 24px;
            margin-left: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .note-card .icons svg.edit:hover {
            fill: blue;
        }
        .note-card .icons svg.delete:hover {
            fill: red;
        }
        `}
      </style>
      <div className="note-card">
        <h2>{note.title}</h2>
        <div className="note-preview">{note.description}</div>
        <div className="icons">
          <svg
            className="edit"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleClickEdit}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-5m-8-5h.01M15 11h6m-6 4h6m-6 4h6M9 9l3-3m0 0l3 3m-3-3v12"
            />
          </svg>
          <svg
            className="delete"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleClickDelete}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.14 21H7.86a2 2 0 01-1.993-1.858L5 7m5-3h4a1 1 0 011 1v1H9V5a1 1 0 011-1z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
