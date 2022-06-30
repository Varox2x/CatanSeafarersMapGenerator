import styled from "styled-components";
import React from "react";
import material7  from "../pictures/animals.jpg"
import material6  from "../pictures/brick.jpg"
import material5  from "../pictures/cereal.jpg"
import material0  from "../pictures/desert.jpg"
import material1  from "../pictures/gold.jpg"
import material2  from "../pictures/sea.jpg"
import material4  from "../pictures/stone.jpg"
import material3  from "../pictures/wood.jpg"

function getAreaFromNumber(number){
    const materials = [material0, material1, material2, material3, material4, material5, material6, material7];
    return materials[number]
}


const DivPuzzle = styled.div`
  height: 100px;
  width: 100px;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  transform: rotate(90deg);
  margin-left: 5px;
  background-size: cover;
  background-image: url(${ props => (props.material != 8)? getAreaFromNumber(props.material) : 'material2' });
`

export default ({numberMaterial}) => {
    return (
        <DivPuzzle material={numberMaterial}/>
    )
}