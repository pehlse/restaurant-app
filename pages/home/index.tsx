import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Restaurant } from '../../src/models/Restaurant'
import { getRestaurants } from '../../src/services/getRestaurants'
import { Header } from './components/Header/Header'
import { ListRestaurant } from './components/ListRestaurant/ListRestaurant'
import * as S from './style'
const Home: NextPage = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [search, setSearch] = useState<string>('')

  async function onGetRestaurants(search:  string) {
   const data = await getRestaurants(undefined, undefined, search)
   setRestaurants(data)
  }

  useEffect(() => {
    onGetRestaurants(search)
  }, [search])

  return (
    <>
      <Header setSearch={setSearch}/>
      <S.ListRestaurantWrapper>
        <div>
          <S.WrapperTitle>
            <S.TitleRestaurantPage>Restaurantes</S.TitleRestaurantPage>
            { search && 
              <S.WrapperSearch>
                <p>Termo Pesquisado</p>
                <h2>{search}</h2>
              </S.WrapperSearch>
            }
          </S.WrapperTitle>
          <ListRestaurant restaurants={restaurants}/>
        </div>
      </S.ListRestaurantWrapper>
    </>
  )
}

export default Home
