import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [];
    }
  }
  render() {
    return (
      <div className="App">
        <h1>React & Firebase Noteworthy App</h1>
        <Note 
          noteContent={} 
          noteId={} 
          key={}
        />
      </div>
    );
  }
}

export default App;
