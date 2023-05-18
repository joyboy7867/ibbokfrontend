import React, { useState } from "react";
import { useContext } from 'react';
import  noteContext  from '../context/notes/NotesContext';


const Addnote = () => {
    const context=useContext(noteContext);
    const {addnote } =context
    const [note, setnote] = useState({title:"",description:"",tag:"default"})
    const handleclick=(e)=>{
        e.preventDefault();
        addnote(note.title,note.description,note.tag)
    }
    const onChange=(e)=>{
        setnote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div className="container" >
      <div className="addnoteform container my-5">
        <form className="addnoteformin container my-5">
          <div className="form-group">
            <h2>ADD YOUR NOTES</h2>
            <label htmlfor="title">
              <h3>Title</h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              
              minLength={5}
              required
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your notes with anyone!!
            </small>
          </div>
          <div className="form-group">
            <label htmlfor="description">
              <h3>Description</h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              
              minLength={5}
              required
            />
          </div>
          <div className="form-group">
            <label htmlfor="tag">
              <h3>Tag</h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
              placeholder="tag if any.. "
              minLength={3}
              
            />
            <small id="id" className="form-text text-muted">
              write something to enable add button
            </small>
          </div>
          
          <button disabled={note.title.length<3||note.description.length<5} type="submit" onClick={handleclick} className="btn btn-lg submit btn-outline-success my-5">
            ADD NOTE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addnote;
