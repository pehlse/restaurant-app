import logo from '../../../../public/logo.png'
import { Input } from '../../../../src/components/Input/Input'
import * as S from './styles'

export const Header = ({setSearch = (search: string) => {}}) => {
  return (
    <S.CustomHeader>
      <S.HeaderWrapper>
        <div>
          <img src={logo.src} alt="Logo get in"/>
        </div>
        <div>
          <S.HeaderTitle>Descubra novos sabores</S.HeaderTitle>
          <h2>Aqui eu converso com você sobre nossa proposta</h2>
        </div>
      </S.HeaderWrapper>
      <S.HeaderInputWrapper>
        <Input type="text" placeholder="Encontre um restaurante" changeSearch={setSearch}/>
      </S.HeaderInputWrapper>
    </S.CustomHeader>
  )
}