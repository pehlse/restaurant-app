import style from 'styled-components'

export const InputWrapper = style.div`
  svg {
    position: absolute;
    left: 12px;
    top: 15px;
    color: #ED1C24;
  }
  position: relative;
  width: 50%
`

export const CustomInput = style.input`
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #E6E6E6;
  background: #FFFFFF;
  padding: 15px;
  text-indent: 20px;
  
  &:focus {
    border-color: #ED1C24;
    outline: none;
  }
`