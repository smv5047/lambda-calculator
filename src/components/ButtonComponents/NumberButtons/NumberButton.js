import React from "react";

const NumberButton = (props) => {
const changeTotal = () => {
    props.setTotal(props.numbers)
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="number Button" onClick={() => changeTotal()}>{props.numbers}</button>
    </>
  );
};

export default NumberButton
