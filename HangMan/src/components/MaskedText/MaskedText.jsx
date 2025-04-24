import React from 'react'
import { getMaskedText } from './MaskingUtility'

const MaskedText = ({ text, guessedLetter }) => {

    const maskedText = getMaskedText(text, guessedLetter)

  return (
    <>
      {maskedText.map((char, index) => {
        return (
            <span key={index} className = 'mx-1 font-bold'>
                {char}
            </span>
        )
      })}
    </>
  )
}

export default MaskedText
