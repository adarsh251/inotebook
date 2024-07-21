import React, { useContext, useState, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

export default function EditNote(props) {
  const {updateNote}=useContext(noteContext);
  const{style, noteContent}=props;
  // console.log(noteContent);
  // console.log(`${noteContent.title}`);
  const [note, setNote] = useState({_id:``,title:``,description:``,tag:``});
  useEffect(() => {
    setNote({
      _id: noteContent._id,
      title: noteContent.title,
      description: noteContent.description,
      tag: noteContent.tag,
    });
    // eslint-disable-next-line
  }, []);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await updateNote(note);
    props.handleClickClose();
  }
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <style>
      {`
        .add-note-form {
        background-color:${style.mid};
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
        text-align: start;
        }

        input.title-input, textarea.tag-input {
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
        textarea.tag-input{
        height: 8vh;
        }
        textarea.description-input {
          flex: 1;
          overflow:auto;
          height: 40vh;
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

        .submit-button {
        border: none;
        border-radius: 0.3em;
          margin-top: 10px;
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
      `}
      </style>
      <div>
        <form className="add-note-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title"><h2>Title:</h2></label>
            <input
              type="text"
              id="title"
              name="title"
              value={note.title}
              onChange={handleChange}
              className="title-input"
              minLength="5"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description"><h2>Description:</h2></label>
            <textarea
              id="description"
              name="description"
              value={note.description}
              onChange={handleChange}
              className="description-input"
              minLength="5"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="tag"><h2>Tag:</h2></label>
            <textarea
              type="text"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={handleChange}
              className="tag-input"
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
