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
  var contenaire = document.getElementById("Main");
  if (first_init == true){
    boo = ReactDOM.createRoot(contenaire);
    first_init = false;
  }
  var n_contenaire = <Free_container 
                      id={n_id}
                      />;
  var domNode = document.createElement('div');
  domNode.id = n_id
  console.log(contenaire)
  contenaire.appendChild(domNode);
  const root = ReactDOM.createRoot(domNode); 
  
  root.render(n_contenaire)
  Container_dict[n_id] = n_contenaire;
};

function App() {
  return (
  <div className="App">
    <div id="Main">
      <button id="in_contenaire_blc"
      onClick={AddContainer}
      className="App-link"
      target="_blank"
      rel="noopener noreferrer"
      > Add new container </button>
    </div>
    
  </div>
    
  );
}
export default App;

