import { useRouter } from 'next/router'
import * as S from './styles'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Restaurant } from '../../../../src/models/Restaurant'
import Link from 'next/link'

interface HeaderProp {
  restaurant: Restaurant
}

export const Header = ({ restaurant }: HeaderProp) => {
  const router = useRouter()


  return (
    <S.CustomHeader>
      <S.CustomButton onClick={() => router.push('/home')}>
        <FontAwesomeIcon icon={faChevronLeft}/>
        <span>Voltar</span>
      </S.CustomButton>
      <S.HeaderWrapper>
        <div>
          <S.AvatarImage src="https://loremflickr.com/640/480/cuisine" alt=""/>
        </div>
        <div>
          <S.CustomTitle>{restaurant?.name}</S.CustomTitle>
          <S.CustomSubtitle>{restaurant?.telephone}</S.CustomSubtitle>
          <a href={restaurant?.website} target="_blank">
            <S.CustomSubtitle>{restaurant?.website}</S.CustomSubtitle>
          </a>
        </div>
      </S.HeaderWrapper>
    </S.CustomHeader>
  )
}