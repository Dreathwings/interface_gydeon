import logo from './logo.svg';
import './App.css';
import './style.css'
import React from 'react';
import Free_container from './Containeur';
import ReactDOM from 'react-dom/client';

export let Container_dict = {0:0};
let first_init = true
let boo = null
function AddContainer() {
  for (var id in Container_dict) {
    console.log(id, "|");
    var n_id = id + 1;
  };
  if (first_init == true){
    var contenaire = document.getElementById("Main");
    boo = ReactDOM.createRoot(contenaire);
    first_init = false;
  }
  var n_contenaire = <Free_container 
                      id={n_id}
                      />;
  
  boo.render(n_contenaire)
  Container_dict[n_id] = n_contenaire;
};

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

