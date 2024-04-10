import logo from './logo.svg';
import './App.css';
import './style.css'
import React from 'react';
import { AddContainer } from './Containeur.js';

export let Container_dict = {0:0}

;
function App() {
  return (
  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={AddContainer}
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Add new container
        </button>
      </header>
      <div id="Main">

      </div>
  </div>
    
  );
}
export default App;
