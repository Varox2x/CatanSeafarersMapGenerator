import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import styled from "styled-components";
import Raw from "./Raw";
import renderMapStructure from "./rendermap mechanic";

// let mapStructure = [
//        [1,2,3,4,5,6],
//       [1,2,3,4,5,6,7],
//      [1,2,3,4,5,6,7,8],
//     [1,2,3,4,5,6,7,8,9],
//      [1,2,3,4,5,6,7,8,],
//       [1,2,3,4,5,6,7],
//        [1,2,3,4,5,6],
// ]

// let mapStructure = renderMapStructure();




const MapBorder = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  position: relative;
`



const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`


export default () => {

    const [mapStructure, setmapStructure] = useState(null);
    const [button, setButton] = useState(true);

    useEffect( () => {
        setmapStructure(renderMapStructure());
    },[button]);



    if(mapStructure == null){
        return (
            <p>Loading . . .</p>
        )

    }


    return (
        <Container>
            <button onClick={() => setButton(!button)}>RENDER</button>
            <MapBorder>
                {mapStructure.map( (el, index) => {
                    return (
                        <Raw key={index} props={el} number={index}/>
                    )
                })}
            </MapBorder>
        </Container>

    )
}