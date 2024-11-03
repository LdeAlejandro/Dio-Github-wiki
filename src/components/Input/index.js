
import { InputContainer } from './styles'

const Input = ({value, onChange, placeholderText}) => {
  return (        
    <InputContainer >
        <input value={value} onChange={onChange}  type='text' placeholder={placeholderText} />
    </InputContainer>
  )
}

export default Input