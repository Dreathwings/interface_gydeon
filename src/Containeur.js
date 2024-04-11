import React from 'react';

export default class Free_container extends React.Component{
    constructor(props){
      super();
      this.id = props.id;
  
      console.log("Add new Container id:",this.id);
      this.render = this.render.bind(this);
      this.dragMouseDown = this.dragMouseDown.bind(this);
      this.elementDrag = this.elementDrag.bind(this);
      this.closeDragElement = this.closeDragElement.bind(this);

      this.initResize = this.initResize.bind(this);
      this.Resize = this.Resize.bind(this);
      this.stopResize = this.stopResize.bind(this);

      this.pos1 = 0;
      this.pos2 = 0;
      this.pos3 = 0;
      this.pos4 = 0;
      this.R_first_init = true;
    }
    render(){
      console.log("Rendering containeur... ",this.id)
      return(
        <div id="c_container" className={this.id}>
          <div id="draggable_container" className={this.id}>
            <div id="c_containerheader" onMouseDown={this.dragMouseDown} className={this.id}>
              <i id="draggable_container_name" className={this.id}>Contrainer test</i>
              <button id="draggable_container_hide" className={this.id}>
                <img src="./ressource/minus-svgrepo-com.svg" alt="" />
              </button>
              <button id="draggable_container_close" className={this.id}>
                <img src="/ressource/close-svgrepo-com.svg" alt="" />
              </button>
            </div>
            <p>Move</p>
            <p>this</p>
            <p>DIV</p>
          </div>
          <div id='resizer-bottom-right' onMouseDown={this.initResize} className={this.id}></div>
        </div>
      );
    };
    dragMouseDown(e) {
      this.element_drag_class = document.getElementsByClassName(this.id);
      //console.log("[dragElement]",this.element_drag_class)
      this.elmnt = this.element_drag_class[0];
      //console.log("[dragElement]",this.elmnt)
      this.e = e || window.event;
      this.e.preventDefault();
      // get the mouse cursor position at startup:
      this.pos3 = this.e.clientX;
      this.pos4 = this.e.clientY;
      document.onmouseup = this.closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = this.elementDrag;
    }
  
    elementDrag(e) {
      this.e = e || window.event;
      this.e.preventDefault();
      // calculate the new cursor position:
      this.pos1 = this.pos3 - this.e.clientX;
      this.pos2 = this.pos4 - this.e.clientY;
      this.pos3 = this.e.clientX;
      this.pos4 = this.e.clientY;
      // set the element's new position:
      this.elmnt.style.top = (this.elmnt.offsetTop - this.pos2) + "px";
      this.elmnt.style.left = (this.elmnt.offsetLeft - this.pos1) + "px";
    }
  
    closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
    
    initResize(e) {
      if (this.R_first_init == true){
        var elemnt = document.getElementsByClassName(this.id)
        for (let i=0;i<elemnt.length;i++){
            var elem = elemnt[i]
          if(elem.id=='draggable_container'){
            this.R_element = elem
          }
          else if(elem.id=='c_container'){
            this.O_element = elem
          }

        };
        this.R_first_init = false;
      }
        document.onmouseup = this.stopResize;
      // call a function whenever the cursor moves:
        document.onmousemove = this.Resize;
        //window.addEventListener('mousemove', this.Resize, false);
        //window.addEventListener('mouseup', this.stopResize, false);
     }
     Resize(e) {
        var w=( (e.clientX-this.O_element.offsetLeft)-10) ;
        var h=(  (e.clientY-this.O_element.offsetTop)-10) ;
        if (h < 40){
            h=40;
        }
        if (w < 135){
            w=135;
        }
        console.log('taile ',w,h,' FOR ',this.R_element)
        console.log('Mouse pos',e.clientX,e.clientY)
        console.log('Windows origine',this.O_element.offsetTop,this.O_element.offsetLeft)
        this.R_element.style.width = w +'px'
        this.R_element.style.height = h + 'px'
     }
     stopResize(e) {
      document.onmouseup = null;
      document.onmousemove = null;
     }
     
  }

  
    
