
import React from "react";
import Puzzle from "./Puzzle";

export default ({props, number}) =>{
    return (
        <div style={{width: "100%", height: "100%", paddingLeft: (number > 3)? `${50 * (number -3)}px` : `${150 -(50 * number)}px`  ,display: "flex",marginBottom: "-20px"}}>
            {props.map( (el,index) => {
                return (
                    <Puzzle numberMaterial={el} key={index}/>
                )
            })}
        </div>
    )
}