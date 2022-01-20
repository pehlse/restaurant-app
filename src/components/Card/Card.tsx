import Link from 'next/link'
import { Restaurant } from '../../models/Restaurant'
import * as S from './styles'

interface PropsCard {
  restaurant: Restaurant
}

export const Card = ({restaurant}: PropsCard) => {
  return (
    <Link href={`/about/${restaurant.id}`}>
      <S.CardWrapper backGround={restaurant.image} >
        <S.CardTitle>{restaurant.name}</S.CardTitle>
      </S.CardWrapper>
    </Link>
  )
}