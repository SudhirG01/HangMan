import React from 'react'

const InputBox = ({type='text', placeholder='Enter your input here...', onChange}) => {
  return (
    <>
      <input 
        className='bg-slate-200 border-2 w-full p-4 rounded-md border-black'
        type={type} 
        placeholder={placeholder} 
        onChange={onChange}/>
    </>
  )
}

export default InputBox
