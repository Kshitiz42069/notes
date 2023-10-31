import React, { useState } from 'react'

const Addnotes = ( {handleaddnote} ) => {
  const characterlimit = 200;
  const [notetext,SetNoteText] = useState('');
  const handlechange=(event)=>{
    if(characterlimit-event.target.value.length>=0){
        SetNoteText(event.target.value);
    }
  };
  const handlesaveclick =()=>{
    if(notetext.trim().length>0){
        handleaddnote(notetext);
        SetNoteText('');
    }
  };
  return (
    <div className="note new">
        <textarea id="" 
        cols="10" 
        rows="8" 
        placeholder='type to add a note..'
        value = {notetext}
        onChange={handlechange}
        ></textarea>
        <div className="note-footer">
            <small>{characterlimit-notetext.length} remaining</small>
            <button className='save' onClick={handlesaveclick}>save</button>
        </div>
    </div>
  )
}

export default Addnotes