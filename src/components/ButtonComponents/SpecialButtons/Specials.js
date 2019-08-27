import React, { useState } from "react";

//import any components needed
import SpecialButton from "./SpecialButton"

//Import your array data to from the provided data file
import {specials} from "../../../data";

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       specialState.map((item, index) => {
        console.log(item)
         return <SpecialButton setTotal= {props.setTotal} key={index} special={item} />
       })
       }
    </div>
  );
};

export default Specials

// const Numbers = (props) => {
//   // STEP 2 - add the imported data to state
//   const [numberState, setNumberState ] = useState(numbers);
 
  

//   return (
//     <div className="numberButtons">
//       {/* STEP 3 - Use .map() to iterate over your array data and return a button
//        component matching the name on the provided file. Pass
//        it any props needed by the child component*/
//       numberState.map((item, index) => {
//         console.log(item)
//         return <NumberButton setTotal= {props.setTotal} key={index} numbers={item} />
//         // return <NumberButton setTotal total={item} value={item} index={index} className="numbers" />
//       })
//        }
//     </div>
//   );
// };