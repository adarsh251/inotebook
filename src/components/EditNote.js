import React, { useContext, useState, useEffect } from "react";
import noteContext from "../context/notes/noteContext";

export default function EditNote(props) {
  const {updateNote}=useContext(noteContext);
  const{noteContent}=props;
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
  }, [noteContent]);
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

        input.title-input,
        input.tag-input {
        flex: 1;
        height: 2em;
        padding: 5px;
        font-size: 1em;
        }

        textarea.description-input {
        flex: 1;
        height: 25em;
        padding: 5px;
        font-size: 1em;
        resize: none;
        }

        .submit-button {
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 1em;
        cursor: pointer;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        }

        .submit-button:hover {
        background-color: #0056b3;
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
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="tag"><h2>Tag:</h2></label>
            <input
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
