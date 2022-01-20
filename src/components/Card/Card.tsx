import Link from 'next/link'
import { Restaurant } from '../../models/Restaurant'
import * as S from './styles'

interface PropsCard {
  restaurant: Restaurant
}

export const Card = ({restaurant}: PropsCard) => {
  return (
    <Link href={`/about/${restaurant.id}`}>
      <S.CardWrapper>
        <S.CardTitle>teste</S.CardTitle>
      </S.CardWrapper>
    </Link>
  )
}