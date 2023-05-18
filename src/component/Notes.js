import React, { useEffect,useRef,useState } from 'react';
import { useContext } from 'react';
import  noteContext  from '../context/notes/NotesContext';
import Noteitem from './Noteitem';
import Addnote from './Addnote';
import {useNavigate} from 'react-router-dom';


const Notes1 = (props) => {
  const history = useNavigate();
    const context=useContext(noteContext);
    const {notes,getnotes,editnote } =context
    const [note, setnote] = useState({id:"",etitle:"",edescription:"",etag:"default"})
    useEffect(() => {
      if(localStorage.getItem('token')){
        getnotes()}
      else{
        history('/login')
      }
    }, [])

const updatenote=(currentnote)=>{
    ref.current.click()
    setnote({id:currentnote._id,etitle:currentnote.title,edescription:currentnote.description,etag:currentnote.tag})
    
}  
const handleclick=(e)=>{
    e.preventDefault();
    editnote(note.id,note.etitle,note.edescription,note.etag)
    console.log("updationg",note )
    refclose.current.click()
    
}
const onChange=(e)=>{
    setnote({...note,[e.target.name]:e.target.value})
}  
const ref = useRef(null)
const refclose=useRef(null)
    
    return <>
    {/* <Addnote/> */}

    
<button  ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">EDIT NOTE</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

      <form>
          <div className="form-group">
            <label htmlfor="etitle">
              <h3>title</h3>
            </label>
            <input
              type="text"
              value={note.etitle}
              className="form-control"
              id="etitle"
              name="etitle"
              aria-describedby="emailHelp"
              onChange={onChange}
              placeholder="Enter text"
              minLength={5}
              required
            />
            <small id="emailHelp" className="form-text text-muted">
              
            </small>
          </div>
          <div className="form-group">
            <label htmlfor="description">
              <h3>description</h3>
            </label>
            <input
              type="text"
              value={note.edescription}
              className="form-control"
              id="edescription"
              name="edescription"
              onChange={onChange}
              placeholder="edescription"
              minLength={5}
              required
            />
          </div>
          <div className="form-check">
            <input
            value={note.etag}
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            
          </div>
          
        </form>


      </div>
      <div className="modal-footer">
        <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.etitle.length<5||note.edescription.length<5} onClick={handleclick} type="button" className="btn btn-primary">Update note</button>
      </div>
    </div>
  </div>
</div>

                
           
    <div className='row my-5'>
        <h2 className='yournotes'>Your Notes....</h2>
        
        {notes.map((note)=>{
            return <Noteitem key={note._id} updatenote={updatenote} note={note}/>
              
        })}

    </div>;
    
    </>
}



export default Notes1;