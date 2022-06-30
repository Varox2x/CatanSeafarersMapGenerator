

// function renderMapStructure(){
//     let mapStructure =[];
//     let storage = [3,2,21,5,5,5,5,5]
//
//         renderRaw(6,0)
//         renderRaw(7,1)
//         renderRaw(8,2)
//         renderRaw(9,3)
//         renderRaw(8,4)
//         renderRaw(7,5)
//         renderRaw(6,6)
//
//
//     function renderRaw(quantityOfPuzzles, rawNumber){
//         mapStructure.push([]);
//         // if (rawNumber == 3){
//         //     mapStructure[3].push(2);
//         // }
//         while(mapStructure[rawNumber].length !== quantityOfPuzzles){
//             let kindOfMaterialToAdd = getFromStorageAddToStructure()
//             mapStructure[rawNumber].push(kindOfMaterialToAdd)
//             storage[rawNumber]--;
//             // if ((rawNumber == 3) && (mapStructure[3].length == 8)){
//             //     mapStructure[3].push(2);
//             // }
//         }
//
//         function getFromStorageAddToStructure(){
//             let randomNnumber = Math.floor(Math.random() * 8);
//             if (storage[rawNumber] > 0){
//                 return randomNnumber
//             }
//             getFromStorageAddToStructure();
//     }
//
//
//     }
//     return mapStructure;
// }
//
// export default renderMapStructure
//
function renderMapStructure(){
    // let mapStructure = [
    //    [null,null,null,null,null,null],
    //   [null,null,null,null,null,null,null],
    //  [null,null,null,null,null,null,null,null],
    // [null,null,null,null,null,null,null,null,null],
    //  [null,null,null,null,null,null,null,null],
    //   [null,null,null,null,null,null, null],
    //    [null,null,null,null,null,null],

    let mapStructure = [];

    let storage = [0,0,0,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7]


    renderRow(6,0);
    renderRow(7,1);
    renderRow(8,2);
    renderRow(9,3);
    renderRow(8,4);
    renderRow(7,5);
    renderRow(6,6);

    function renderRow(ammout, lvl){
        mapStructure.push([]);
        if (lvl == 3){
            mapStructure[lvl].push(2);
        }
        while (mapStructure[lvl].length < ammout){
                let randomStorageArray = Math.floor(Math.random() * storage.length);
                mapStructure[lvl].push(storage[randomStorageArray]);
                storage.splice(randomStorageArray, 1);
                if ((lvl == 3) && (mapStructure[3].length == ammout-1)){
                    mapStructure[lvl].push(2);
                }
        }
    }


    console.log(mapStructure);


    return mapStructure;
}

export default renderMapStructure


//
// function renderMapStructure(){
//     let mapStructure = [
//        [null,null,null,null,null,null],
//       [null,null,null,null,null,null,null],
//      [null,null,null,null,null,null,null,null],
//     [null,null,null,null,null,null,null,null,null],
//      [null,null,null,null,null,null,null,null],
//       [null,null,null,null,null,null, null],
//        [null,null,null,null,null,null],
// ]
//     let storage = [3,2,21,5,5,5,5,5]
//
//
//
//     function giveMaterial(){
//         for(let i = 0; i <= 51; i++){
//
//         }
//
//
//     }
//
//
//
//
//
//     return mapStructure;
// }
//
// export default renderMapStructure
