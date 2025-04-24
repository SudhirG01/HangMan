import React from 'react'

const LetterButtons = ({ text, guessedLetter, onLetterClick }) => {

    const alphabets = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('')
    const originalText = new Set(text.toUpperCase().split(''))
    const guessedLetterSet = new Set(guessedLetter)

    const getButtonStyle = (char) => {
        if(guessedLetterSet.has(char)) {
            return originalText.has(char) ? 'bg-green-500' : 'bg-red-500'
        }
        else {
            return 'bg-blue-500'
        }
    }

    const handleClick = (event) => {
        const char = event.target.value
        onLetterClick?.(char)
    }


    const buttons = alphabets.map((char) => {
        return (
            <button
                key = {`button-${char}`}
                value = {char}
                onClick = {handleClick}
                disabled = {guessedLetterSet.has(char)}
                className = {`w-12 h-12 m-4 rounded-md ${getButtonStyle(char)}`}
            >
                {char}
            </button>
        )
    })

  return (
    <>
      {buttons}
    </>
  )
}

export default LetterButtons
