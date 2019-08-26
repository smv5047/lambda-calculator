import React from "react";

const NumberButton = (props) => {
  
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="number Button" onClick={() => props.changeTotal}>{props.numbers}</button>
    </>
  );
};

export default NumberButton
