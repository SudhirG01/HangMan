import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import MaskedText from '../../components/MaskedText/MaskedText'
import LetterButtons from '../../components/LetterButtons/LetterButtons'
import HangMan from '../../components/HangMan/HangMan'

const PlayGame = () => {

    const location = useLocation();
    const text = location.state;
    const [guessedLetter, setGuessedLetter] = useState([]);
    const [step, setStep] = useState(1);

    const handleLetterClick = (char) => {
      if(text.toUpperCase().includes(char)) {
        console.log('correct');
      }
      else {
        console.log('wrong')
        setStep(step + 1)
      }
      setGuessedLetter([...guessedLetter, char])
    }

  return (
    <>
      <div>Play word is {text}</div>
      {text !== null && (
        <>
          <MaskedText text = {text} guessedLetter = {guessedLetter} />
          <div>
            <LetterButtons text = {text} guessedLetter = {guessedLetter} onLetterClick={handleLetterClick} />
          </div>
          <div>
            <HangMan step = {step}/>
          </div>
        </>
      )}
      <Link to='/'>Home</Link>
    </>
  )
}

export default PlayGame
