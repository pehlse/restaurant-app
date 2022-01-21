import * as S from './styles'

export const Header = () => {
  return (
    <S.CustomHeader>
      <S.CustomButton>Voltar</S.CustomButton>
      <S.HeaderWrapper>
        <div>
          <S.AvatarImage src="https://loremflickr.com/640/480/cuisine" alt=""/>
          <h2>Nome do resturant</h2>
          <h3>telefone</h3>
          <h4>site</h4>
        </div>
      </S.HeaderWrapper>
    </S.CustomHeader>
  )
}