import React, {useState} from "react";


//import any components needed
import NumberButton from './NumberButton';

//Import your array data to from the provided data file
import { numbers } from "../../../data";


const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState ] = useState(numbers);
  const {changeTotal} = () => {
    setNumberState(numberState)
  }
  

  return (
    <div className="numberButtons">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      numberState.map((item, index) => {
        console.log(item)
        return <NumberButton changeTotal= {changeTotal} key={index} numbers={item} />
        // return <NumberButton setTotal total={item} value={item} index={index} className="numbers" />
      })
       }
    </div>
  );
};

export default Numbers
