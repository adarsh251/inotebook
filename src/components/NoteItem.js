import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

export default function NoteItem(props) {
  const { deleteNote } = useContext(noteContext);
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
            box-shadow: 0 0 10px ${
              style.theme === "light"
                ? "rgba(0, 0, 0, 0.2)"
                : "rgba(255, 255, 255, 0.2)"
            };
        }
        .note-card h2 {
            margin: 0;
            margin-bottom: 10px;
            height: 1.2em;
            overflow: hidden;
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
            transition: all 0.2s ease;
            
        }
        .note-card .icons svg.feather-trash-2:hover {
            stroke: red;
        }
        .note-card .icons svg.feather-edit-3:hover {
            stroke: blue;
        }
        `}
      </style>
      <div className="note-card">
        <h2>{note.title}</h2>
        <div className="note-preview">{note.description}</div>
        <div className="icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-edit-3"
            onClick={handleClickEdit}
          >
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-trash-2"
            onClick={handleClickDelete}
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </div>
      </div>
    </>
  );
}
