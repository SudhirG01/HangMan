import { useNavigate } from 'react-router-dom';
import TextForm from './TextForm';
import { useContext, useState } from 'react'
import { WordContext } from '../../context/WordContext';

const TextFormContainer = () => {

    const { setWord } = useContext(WordContext)
    const [inputType, setInputType] = useState('password');
    const navigate = useNavigate();


    const handleChange = (event) => {
      setWord(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("form submitted")
        navigate('/play')
    }

    const handleClick = () => {
        if(inputType === 'text')
            setInputType('password')
        else
            setInputType('text')
    }

  return (
    <>
      <TextForm 
        inputType={inputType}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
      />
    </>
  )
}

export default TextFormContainer
