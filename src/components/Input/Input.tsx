import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as S from './styles'

interface Props {
  type: string
  placeholder: string
  changeSearch: (search: string) => void
}

export const Input = (props: Props) => {
  return (
    <S.InputWrapper>
      <div>
        <FontAwesomeIcon icon={faSearch}/>
      </div>
      <S.CustomInput {...props} onChange={(e) => props.changeSearch(e.target.value)}/>
    </S.InputWrapper>
  )
}