import React from 'react'
import Note from './Note'
import Addnotes from './Addnotes'

const Noteslist=({ notes,handleaddnote,handledeletenote })=> {
  return (
    <div className="notes-list">
        {notes.map((note)=><Note 
        id={note.id} 
        text={note.text} 
        date={note.date}
        handledeletenote = {handledeletenote}
        />)}
        <Addnotes handleaddnote={handleaddnote}/>
    </div>
       
  )
};

export default Noteslist