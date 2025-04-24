import InputBox from '../InputBox/InputBox'
import Button from '../Button/Button'

const TextForm = ({inputType, handleChange, handleClick, handleSubmit}) => {

  return (
    <>
      <form onSubmit={handleSubmit} className='m-3'>
        <div>
            <InputBox 
                type={inputType} 
                placeholder='Enter the word to guess.....' 
                onChange={handleChange}
            />
        </div>
        <div>
            <Button 
                btnText={inputType === 'password' ? 'Show' : 'Hide'}
                style='warning'
                onClick={handleClick}
            />
        </div>
        <div>
            <Button 
                type="submit" 
                btnText='Submit' 
                style='primary'
            />
        </div>
      </form>
    </>
  )
}

export default TextForm
