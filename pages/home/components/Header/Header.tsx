import logo from '../../../../public/logo.png'
import { Input } from '../../../../src/components/Input/Input'
import * as S from './styles'

export const Header = () => {
  return (
    <S.CustomHeader>
      <S.HeaderWrapper>
        <div>
          <img src={logo.src} alt="Logo get in"/>
        </div>
        <div>
          <h1>Descubra novos sabores</h1>
          <h2>Aqui eu converso com você sobre nossa proposta</h2>
        </div>
      </S.HeaderWrapper>
      <S.HeaderInputWrapper>
        <Input type="text" placeholder="Encontre um restaurante"/>
      </S.HeaderInputWrapper>
    </S.CustomHeader>
  )
}