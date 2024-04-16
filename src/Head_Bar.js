import React from 'react';

export default class Head_Bar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="headbar_container">
                <img id="Gydeon_icon" src="5.svg"></img>
                <div id="head_circle_c">
                    <div id="head_circle"></div>
                    
                </div>
            </div>
        )
    }
}