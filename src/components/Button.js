import React from "react";
import '../styles/Button.css'

function Button(props){
  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=') //números, '.', y =' tienen el mismo estilo
  } 

  return(
    <div
    className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}>
      {props.children} {/* todo lo q yo esctriba entre <Button></Button> se va a considerar conmo children, puedo acceder con props.children */}
    </div>
    )
}

export default Button