import React from 'react'
import btnStyle from './btnStyle'

const Button = ({type='button', btnText, style, onClick}) => {

  return (
    <>
      <button 
        className={`p-4 m-4 border-3 rounded-md ${btnStyle(style)}`}
        type={type}
        onClick={onClick}
      >
        {btnText}
      </button>
    </>
  )
}

export default Button
