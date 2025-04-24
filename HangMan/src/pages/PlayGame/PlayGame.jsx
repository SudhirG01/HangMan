import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MaskedText from '../../components/MaskedText/MaskedText'
import LetterButtons from '../../components/LetterButtons/LetterButtons'
import HangMan from '../../components/HangMan/HangMan'
import Button from '../../components/Button/Button'
import useWordStore from '../../store/WordStore'

const PlayGame = () => {

    const { word, wordList, setWord } = useWordStore(); // coming from the store
    const [guessedLetter, setGuessedLetter] = useState([]);
    const [step, setStep] = useState(1);

    const handleLetterClick = (char) => {
      if(word.toUpperCase().includes(char)) {
        console.log('correct');
      }
      else {
        console.log('wrong')
        setStep(step + 1)
      }
      setGuessedLetter([...guessedLetter, char])
    }

    const handleReset = () => {
      const randomIndex = Math.floor(Math.random() * wordList.length)
      setWord(wordList[randomIndex].wordValue)
      setGuessedLetter([])
      setStep(1)
      console.log(wordList[randomIndex].wordValue)
    }

  return (
    <>
      <div>Play word is {word}</div>
      {word !== null && (
        <>
          <MaskedText text = {word} guessedLetter = {guessedLetter} />
          <div>
            <LetterButtons text = {word} guessedLetter = {guessedLetter} onLetterClick={handleLetterClick} />
          </div>
          <div>
            <HangMan step = {step}/>
          </div>
        </>
      )}
      <Button btnText='Reset Word' style='primary' onClick={handleReset}/>
      <Link to='/'>Home</Link>
    </>
  )
}

export default PlayGame
