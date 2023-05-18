import React, { useState } from "react";
import noteContext from "./NotesContext";
const NoteState=(props)=>{
   const host="http://localhost:5000"
    const initialnotes= []
      const [notes, setnotes] = useState(initialnotes)
      //get all note
      const getnotes=async()=>{
        const response = await fetch(`${host}/api/notes/getallnotes`, {
          method: "GET", 
          
          headers: {
            "Content-Type": "application/json",
            "authtok":localStorage.getItem('token')
           
          },
         
          
        });
       
       const json=await response.json()
       console.log(json)
       setnotes(json)

      }

      //add note

      const addnote=async(title,description,tag)=>{
        const response = await fetch(`${host}/api/notes/addnotes`, {
          method: "POST", 
          
          headers: {
            "Content-Type": "application/json",
            "authtok":localStorage.getItem('token')
           
          },
         
          body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
        });
       
       const note=await response.json();
       setnotes(notes.concat(note))

      }


      //delete note

      const deletenote=async(id)=>{
        const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
          method: "DELETE", 
          
          headers: {
            "Content-Type": "application/json",
            "authtok":localStorage.getItem('token')
           
          },
         
           
        });
        const json=await response.json
        console.log(json)
        console.log("delee a note"+id)
        const newnote=notes.filter((note)=>{return note._id!==id})
        setnotes(newnote)
        
      }




      //edit note
      const editnote=async(id,title,description,tag)=>{
        //api
        
          const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
            method: "PUT", 
            
            headers: {
              "Content-Type": "application/json",
              "authtok":localStorage.getItem('token')
             
            },
           
            body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
          });
          const json= response.json(); // parses JSON response into native JavaScript objects
        
        
       let newnotes=JSON.parse(JSON.stringify(notes))
        //logic to edit
        for (let index = 0; index < newnotes.length; index++) {
          const element = newnotes[index];
          if(element.id===id){
            newnotes[index].title=title;
            newnotes[index].description=description;
            newnotes[index].tag=tag;
            break
          }
          
          
        }
        console.log(newnotes)
        getnotes()
        setnotes(newnotes)
      }
    return(
        
        <noteContext.Provider value={{notes,addnote,deletenote,editnote,getnotes}}>
            {props.children};
        </noteContext.Provider>
    )
}
export default NoteState;