import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as S from './styles'

interface Props {
  type: string
  placeholder: string
}

export const Input = (props: Props) => {
  return (
    <S.InputWrapper>
      <div>
        <FontAwesomeIcon icon={faSearch}/>
      </div>
      <S.CustomInput {...props} />
    </S.InputWrapper>
  )
}