import { Restaurant } from "../../../../src/models/Restaurant";

import * as S from './style'

interface HeaderProp {
  restaurant?: Restaurant
}


export const AboutRestaurant = ({ restaurant }: HeaderProp) => {
  return (
    <S.AboutWrapper>
      <div>
        <S.CustomLabel>Descrição</S.CustomLabel>
        <S.CustomTitle>{restaurant?.description}</S.CustomTitle>
        <S.CustomLabel>Faixa de preço</S.CustomLabel>
        <S.CustomSubtitle>{restaurant?.price_range}</S.CustomSubtitle>
        <S.CustomLabel>Horários de Funcionamento</S.CustomLabel>
        <S.CustomSubtitle>{restaurant?.opening_hours}</S.CustomSubtitle>
        <S.CustomLabel>Formas de pagamento</S.CustomLabel>
        <S.CustomSubtitle>{restaurant?.payment_methods}</S.CustomSubtitle>
      </div>
    </S.AboutWrapper>
  )
}