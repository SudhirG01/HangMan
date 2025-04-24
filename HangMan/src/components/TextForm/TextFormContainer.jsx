import { useNavigate } from 'react-router-dom';
import TextForm from './TextForm';
import { useState } from 'react'
import useWordStore from '../../store/WordStore';

const TextFormContainer = () => {

    const { setWord } = useWordStore();
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
