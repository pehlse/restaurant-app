import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Restaurant } from '../../src/models/Restaurant'
import { getRestaurants } from '../../src/services/getRestaurants'
import { Header } from './components/Header/Header'
import { ListRestaurant } from './components/ListRestaurant/ListRestaurant'
import * as S from './style'
const Home: NextPage = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  async function onGetRestaurants() {
   const data = await getRestaurants()
   console.log(data)
   setRestaurants(data)
  }

  useEffect(() => {
    onGetRestaurants()
  }, [])

  return (
    <>
      <Header />
      <S.ListRestaurantWrapper>
        <div>
          <S.TitleRestaurantPage>Restaurantes</S.TitleRestaurantPage>
          <ListRestaurant restaurants={restaurants}/>
        </div>
      </S.ListRestaurantWrapper>
    </>
  )
}

export default Home
