import { Card } from '../../../../src/components/Card/Card'
import { Restaurant } from '../../../../src/models/Restaurant'
import * as S from './styles'

interface PropsListRestaurant {
  restaurants: Restaurant[]
}

export const ListRestaurant = ({restaurants}: PropsListRestaurant) => {
  return (
    <S.SectionWrapper>
      { restaurants.map((restaurant) => (<Card restaurant={restaurant} key={restaurant.id}/>)) }
    </S.SectionWrapper>    
  )
}