import React, { useContext, useEffect, useState } from "react";
import noteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";
export default function AddNote(props) {
  const navigate=useNavigate();
  const { style } = props;
  const { addNote } = useContext(noteContext);
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    navigate('/notes');
  };
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const textarea = document.querySelector("textarea");
    textarea.addEventListener("keyup", (event) => {
      textarea.style.height = "32px";
      let scHeight = event.target.scrollHeight + 4;
      //console.log(scHeight);
      textarea.style.height = `${scHeight}px`;
    });
  }, []);
  return (
    <>
      <style>
        {`
        .add-note-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 20px;
        }

        .form-group {
          display: flex;
          justify-content: space-evenly;
          margin: 10px 0;
          width: 100%;
          max-width: 800px;
        }

        label {
          width: 150px;
          margin-right: 10px;
          text-align: right;
        }

        input.title-input {
          flex: 1;
          height: 2em;
          padding: 5px;
          font-size: 1em;
          resize: none;
          outline: none;
          background-color: ${style.light};
          border:1px solid ${style.dark};
          border-radius: 0.4em;
          transition: box-shadow 0.2s ease;
        }

        input.title-input:is(:focus, :valid, :hover){
          box-shadow: 0 0 5px ${style.dark};
        }
        
        textarea.description-input, textarea.tag-input{
          flex: 1;
          height: 2em;
          padding: 5px;
          font-size: 1em;
          resize: none;
          outline: none;
          background-color: ${style.light};
          border-color: ${style.dark};
          border-radius: 0.4em;
          transition: box-shadow 0.2s ease;
        } 

        textarea.description-input:is(:focus, :valid, :hover){          
          box-shadow: 0 0 5px ${style.dark};
        }
        textarea.tag-input:is(:focus, :hover){          
          box-shadow: 0 0 5px ${style.dark};
        }
        textarea:is(:focus){
          border-width: 2px;
          padding: 4px;
        }

        textarea::-webkit-scrollbar{
          width:0px;
        }
        .submit-button {
        border: none;
        border-radius: 0.3em;
          margin-top: 20px;
          padding: 10px 20px;
          font-size: 1em;
          cursor: pointer;
          background-color:${style.light};
          color: ${style.theme === "light" ? "#000000" : "#ffffff"};
              transition: box-shadow 0.2s ease;
              cursor:pointer;
              box-shadow: 0 0 5px ${style.dark};
        }

        .submit-button:hover {
          box-shadow: 0 0 15px ${style.dark};
          text-decoration:underline;
        }
          label{
          text-align: start;
          }
      `}
      </style>
      <div>
        <form className="add-note-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">
              <h2>Title:</h2>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={note.title}
              onChange={handleChange}
              className="title-input"
              placeholder="Min. 5 characters"
              minLength="5"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">
              <h2>Description:</h2>
            </label>
            <textarea
              id="description"
              name="description"
              value={note.description}
              onChange={handleChange}
              className="description-input"
              minLength="5"
              required
              placeholder="Min. 5 characters"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="tag">
              <h2>Tag:</h2>
            </label>
            <textarea
              type="text"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={handleChange}
              className="tag-input"
              placeholder="separate tags with a comma"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            <div className="text">Submit</div>
          </button>
        </form>
      </div>
    </>
  );
}
