import React from 'react';
import  noteContext  from '../context/notes/NotesContext';
import { useContext } from 'react';

const Noteitem = (props) => {
    const{note,updatenote}=props;
    const context=useContext(noteContext);
    const {deletenote} =context
    return <div className='col-md-6 my-3'>
        <div className="card my-6">
  <div className="card-body disnote">
    <h5 className="card-title">Title :{note.title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">Tag :{note.tag}</h6>
    <p className="card-text">Description :{note.description}</p>
    <i className="fa-solid fa-trash mx-5"onClick={()=>{deletenote(note._id)}}></i>
    <i className="fa-solid fa-pen-to-square mx-5"onClick={()=>{updatenote(note)}}></i>
   
  </div>
</div>
    </div>;
}



export default Noteitem;