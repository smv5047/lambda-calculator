import React from "react";

const Display = (props) => {
  return <div className = "display">{props.display || 0}</div>;
};

export default Display
