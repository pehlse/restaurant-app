import style from 'styled-components'

import backGroundImg from '../../../../public/back-ground.png'

export const HeaderWrapper = style.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const HeaderInputWrapper = style.div`
  display: flex;
  justify-content: center;
`
export const CustomHeader = style.header`
  background-image: url(${backGroundImg.src});
  background-position: center; 
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const HeaderTitle = style.h1`
  margin-bottom: 6px;
`
export const HeaderLogo = style.img`
  display: none;
  @media(min-width: 800px) {
    display: inline;
  }
`