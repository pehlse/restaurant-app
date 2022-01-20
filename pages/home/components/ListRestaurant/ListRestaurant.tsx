import { Card } from '../../../../src/components/Card/Card'
import { Restaurant } from '../../../../src/models/Restaurant'
import * as S from './styles'

export const ListRestaurant = () => {
  const restaurants: Restaurant[] = [
    {
      id: 1,
      name: 'teste'
    },
    {
      id: 2,
      name: 'teste'
    },
    {
      id: 3,
      name: 'teste'
    },
    {
      id: 4,
      name: 'teste'
    },
    {
      id: 5,
      name: 'teste'
    },
    {
      id: 6,
      name: 'teste'
    },
    {
      id: 7,
      name: 'teste'
    },
    {
      id: 8,
      name: 'teste'
    }
  ]

  return (
    <S.SectionWrapper>
      { restaurants.map((restaurant) => (<Card restaurant={restaurant} key={restaurant.id}/>)) }
    </S.SectionWrapper>    
  )
}