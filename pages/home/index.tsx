import type { NextPage } from 'next'
import { Header } from './components/Header/Header'
import { ListRestaurant } from './components/ListRestaurant/ListRestaurant'
import * as S from './style'
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <S.ListRestaurantWrapper>
        <div>
          <S.TitleRestaurantPage>Restaurantes</S.TitleRestaurantPage>
          <ListRestaurant />
        </div>
      </S.ListRestaurantWrapper>
    </>
  )
}

export default Home
