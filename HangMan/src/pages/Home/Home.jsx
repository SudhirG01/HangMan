import React, { useContext, useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import { WordContext } from '../../context/WordContext'

const Home = () => {

    const { setWordList, setWord } = useContext(WordContext)

    const fetchWord = async () => {
        const response = await fetch("http://localhost:3000/words")
        const data = await response.json()
        setWordList(data)
        const randomIndex = Math.floor(Math.random() * data.length)
        setWord(data[randomIndex].wordValue)
        console.log(data[randomIndex].wordValue)
    }

    useEffect(() => {
        fetchWord();
    }, [])

  return (
    <>
      <Link to='play'>
        <Button btnText="Single Player" style="primary"/>
      </Link>
      <Link to='start'>
        <Button btnText="Multi Player" style="primary"/>
      </Link>
    </>
  )
}

export default Home
