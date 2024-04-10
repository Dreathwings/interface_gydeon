import logo from './logo.svg';
import './App.css';
import './style.css'
import React from 'react';
import Free_container from "./Containeur.js"
import ReactDOM from 'react-dom/client';
let Container_dict = {0:0}

function AddContainer(){
  for(var id in Container_dict){
    console.log(id, "|")
    var n_id = id+1
    //Container_dict[n_id] = n_contain
    ReactDOM.render(<Free_container id='chibre'/> )
  }
}
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
    </div>
    
  );
}
export default App;
