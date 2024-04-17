import React from 'react';

export default class Head_Bar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="headbar_container">
                <div id="circlemain">
                    <div id="myCircle">
                        <div id="mainCircle">
                                <div class="circle"></div>
                                <div class="circle1"></div>
                                <div id="mainContent">
                                    <h2 id="mainText">Hi!</h2>
                                    <ul class="bars">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                            </div>
                        </div>
                </div>
            </div>
                <div id="head_circle_c">
                    <div id="head_circle"></div>
                    
                </div>
            </div>
        )
    }
}