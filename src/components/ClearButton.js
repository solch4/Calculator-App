import React from "react";
import '../styles/ClearButton.css'

const ClearButton = (props) => (
  <div className="clear-button" onClick={props.clearHandler} >
    Clear
  </div>
)

export default ClearButton
