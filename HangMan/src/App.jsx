import { Routes, Route } from 'react-router-dom'
import StartGame from './pages/StartGame/StartGame'
import PlayGame from './pages/PlayGame/PlayGame'
import Home from './pages/Home/Home'
import { WordContext } from './context/WordContext'
import { useState } from 'react'

function App() {

  const [wordList, setWordList] = useState([])
  const [word, setWord] = useState()

  return (
    <>
      <WordContext.Provider value={{wordList, setWordList, word, setWord}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='start' element={<StartGame />}/>
          <Route path='play' element={<PlayGame />} />
        </Routes>
      </WordContext.Provider>
    </>
  )
}

export default App
