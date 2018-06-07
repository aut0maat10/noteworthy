import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [
        { id: 1, noteContent: "Note 1 here!" },
        { id: 2, noteContent: "Note 2 here!" }
      ],
    }
  }

  addNote = (note) => {
    const previousNotes = this.state.notes;
    previousNotes.push({ id: previousNotes.length + 1, noteContent: note});
    this.setState({
      notes: previousNotes,
    })
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">
            <h1>React & Firebase Noteworthy App</h1>
          </div>
        </div>
        {/* <div className="notesBody"> */}
          {
            this.state.notes.map(note => {
              return (
                <Note
                  noteContent={note.noteContent}
                  noteId={note.noteId}
                  key={note.noteId}
                />
              )
            })
          }
          
        {/* </div> */}
        {/* <div className="notesFooter"> */}
          <NoteForm  addNote={this.addNote}/>
        {/* </div> */}
      </div>
    );
  }
}

export default App;
