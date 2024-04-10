import React from 'react';

class Free_container extends React.Component{
    constructor(props){
      super(props)
      this.id = this.props.id;
  
      console.log("Add new Container id:",this.id)
    }
    render() {
      console.log("Rendering containeur ",this.id)
      return <div id="c_container" class={this.id}>
          <div id="draggable_container" class={this.id}>
            <div id="c_containerheader" class={this.id}>
              <i id="draggable_container_name" class={this.id}>Contrainer test</i>
              <button id="draggable_container_hide" class={this.id}>
                <img src="ressource/minus-svgrepo-com.svg" alt="" />
              </button>
              <button id="draggable_container_close" class={this.id}>
                <img src="ressource/close-svgrepo-com.svg" alt="" />
              </button>
            </div>
            <p>Move</p>
            <p>this</p>
            <p>DIV</p>
          </div>
          <div id='resizer-bottom-right' class={this.id}></div>
        </div>
    
    };

    dragElement(drag_class) {
      console.log(document);
      this.element_drag_class = document.getElementsByClassName(drag_class);
  
    console.log(this.element_drag_class);
    this.elmnt=this.element_drag_class[0];
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(this.elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(this.elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      /*elmnt.onmousedown = dragMouseDown;*/
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      this.elmnt.style.top = (this.elmnt.offsetTop - pos2) + "px";
      this.elmnt.style.left = (this.elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  /*Make resizable div by Hung Nguyen*/
    resizeElement(resizer_class) {
  
      this.elemnt = document.getElementsByClassName(resizer_class)
    console.log(this.elemnt)
    for (let i=0;i<this.elemnt.length;i++){
        this.elem = this.elemnt[i]
        console.log(this.elem.id)
        if (this.elem.id=='resizer-bottom-right'){
            console.log('Resizer found')
            this.elem.addEventListener('mousedown', initResize, false);
        }
        else if(this.elem.id=='draggable_container'){
            console.log('element found')
            this.element = this.elem
        }
    }
    function initResize(e) {
        window.addEventListener('mousemove', Resize, false);
        window.addEventListener('mouseup', stopResize, false);
     }
     function Resize(e) {
        console.log(this.element)
        var w=(e.clientX - this.element.offsetTop) ;
        var h=(e.clientY - this.element.offsetLeft) ;
        if (h < 40){
            h=40;
        }
        if (w < 135){
            w=135;
        }
        console.log('taile ',w,h)
        this.element.style.width = w+'px'
        this.element.style.height = h+ 'px'
     }
     function stopResize(e) {
         window.removeEventListener('mousemove', Resize, false);
         window.removeEventListener('mouseup', stopResize, false);
     }
     
    }
  };
  export default {Free_container};