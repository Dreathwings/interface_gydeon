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

      this.setFocus = this.setFocus.bind(this);

      this.remove_container = this.remove_container.bind(this);
      this.main = document.getElementById("Main")
      console.log(this.main)
      this.pos1 = 0;
      this.pos2 = 0;
      this.pos3 = 0;
      this.pos4 = 0;
      this.R_first_init = true;
    }
    render(){
      console.log("Rendering containeur... ",this.id)
      //add your content to the div id c_content 
      return(
        <div id="c_container" onMouseDown={this.setFocus} onclass={this.id} className={this.id}>
          <div id="draggable_container" class={this.id} className={this.id}>
            <div id="c_containerheader" onMouseDown={this.dragMouseDown} class={this.id} className={this.id}>
              <i id="draggable_container_name" class={this.id} className={this.id}>Contrainer {this.id}</i>
              <button id="draggable_container_hide" class={this.id} className={this.id}>
                <img src="minus-svgrepo-com.svg" alt="" />
              </button>
              <button id="draggable_container_close" onClick={this.remove_container} class={this.id} className={this.id}>
                <img src="close-svgrepo-com.svg" alt="" />
              </button>
            </div>
            <div id="c_content"> 
            <p>Move</p>
            <p>this</p>
            <p>DIV</p>
            </div>
          </div>
          <div id='resizer-bottom-right' onMouseDown={this.initResize} class={this.id} className={this.id}>
            <div id='round_1' class={this.id} className={this.id}></div>
            <div id='round_2' class={this.id} className={this.id}></div>
            <div id='round_3' class={this.id} className={this.id}></div>
          </div>
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
      //console.log(this.main)
      var t= (this.elmnt.offsetTop - this.pos2)
      if (t<0){
        t=0
      }
      else if(t>(this.main.offsetHeight - this.elmnt.offsetHeight)){
        //console.log(this.main.offsetWidth)
        t = this.main.offsetHeight - this.elmnt.offsetHeight
      }

      var l = (this.elmnt.offsetLeft - this.pos1)
      if (l<0){
        l=0
      }
      else if(l>(this.main.offsetWidth - this.elmnt.offsetWidth)){
        //console.log(this.main.offsetWidth)
        l = this.main.offsetWidth - this.elmnt.offsetWidth
      }

      this.elmnt.style.top = t + "px";
      this.elmnt.style.left = l + "px";
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
        var w = ( (e.clientX - this.O_element.offsetLeft)) ;
        var h = ( (e.clientY - this.O_element.offsetTop - 125)) ;
        if (h < 30){
            h=30;
        }
        if (w < 150){
            w=150;
        }
        //console.log('taile ',w,h,' FOR ',this.R_element)
        //console.log('Mouse pos',e.clientX,e.clientY)
        //console.log('Windows origine',this.O_element.offsetTop,this.O_element.offsetLeft)
        this.R_element.style.width = w +'px'
        this.R_element.style.height = h + 'px'
     }
     stopResize(e) {
      document.onmouseup = null;
      document.onmousemove = null;
     }

    setFocus(){
      var el = document.getElementById("Main")
      //console.log(el.children)
      for (let i = 0; i < el.children.length; i++) {
        var ele = el.children[i]
        //console.log(ele)
        if(ele.id == this.id){
          ele.children[0].style.zIndex = 69
          //console.log("Set ",ele.id," to z_index -1")
        }
        else if(ele.id == "in_contenaire_blc"){
          ele.style.zIndex = 10
          //console.log("Set ",ele.id," to z_index 10")
        }
        else {
          ele.children[0].style.zIndex = 10
        }
      
     }
    }

    remove_container(){
      var del = document.getElementById("Main");
      var bob = del.children
      console.log(bob)
      console.log('boucle')
      for(var i=0;i<bob.length;i++){
        console.log(bob[i])
        if(bob[i].id == this.id){
          del.removeChild(bob[i])
        }
        
      }
      
    }
  }
