import React from "react";


const SpecialButton = (props) => {
  const changeTotal = () => {
    props.setTotal(props.special)
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="special Button" onClick={() => changeTotal()}>{props.special}</button>
    </>
  );
};

export default SpecialButton


  