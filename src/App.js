import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [
        { id: 1, noteContent: "Note 1 here!" },
        { id: 2, noteContent: "Note 2 here!" }
      ];
    }
  }
  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">
            <h1>React & Firebase Noteworthy App</h1>
          </div>
          <div className="notesBody">
            <Note 
              noteContent={} 
              noteId={} 
              key={}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
