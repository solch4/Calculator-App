import React from "react";
import '../styles/Button.css'

function Button(props){
  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=')
  } 

  return(
    <button
      className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.clickHandler(props.children)} >
      {props.children}
    </button>
    )
}

export default Button