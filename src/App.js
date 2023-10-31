import { useEffect, useState } from "react";
import Noteslist from "./components/Noteslist";
import {nanoid} from 'nanoid';
import Search from "./components/Search";
import Header from "./components/header";


const App=()=> {
  const [notes,setNotes] = useState([
    {
    id: nanoid(),
    text: "this is my first note",
    date: "15/10/23"
    },
    {
    id: nanoid(),
    text: "this is my second note",
    date: "17/10/23"
    },
    {
    id: nanoid(),
    text: "this is my another note",
    date: "19/10/23"
    },
    {
    id: nanoid(),
    text: "this is my I forgot note",
    date: "21/10/23"
    },
    {
    id: nanoid(),
    text: "this is my that one note",
    date: "23/10/23"
    }
  ]);

  const [searchText, SetSearchText]= useState('');

  const [darkMode,SetDarkMode] = useState(false);

  useEffect(()=>{
    const savedNotes=JSON.parse(
      localStorage.getItem('react-notes-app-data')
      );

    if(savedNotes){
      setNotes(savedNotes);
    }
  },[])

  useEffect(()=>{
      localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
  },[notes])

  const addnote =(text)=>{
    const date = new Date();
    const newnote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newnotes = [...notes,newnote];
    setNotes(newnotes);
  };
  const deletenote = (id) =>{
    const newnotes = notes.filter((note)=>note.id !== id);
    setNotes(newnotes);
  };

  return (
    <div className={`${darkMode && 'darkmode'}`}>
      <div className="container">
      <Header
        handleDarkMode = {SetDarkMode}
      />
      <Search
        handleSearchNote={SetSearchText}
      />
      <Noteslist
        notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText.toLowerCase()))}
        handleaddnote={addnote}
        handledeletenote = {deletenote}
      />
      </div>
    </div>
  );
}

export default App;
