import { useNavigate } from 'react-router-dom';
import TextForm from './TextForm';
import { useState } from 'react'

const TextFormContainer = () => {

    const [inputType, setInputType] = useState('password');
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();


    const handleChange = (event) => {
      setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("form submitted")
        navigate('/play', {state: inputValue})
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
