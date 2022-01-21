import style from 'styled-components'

import backGroundImg from '../../../../public/background2.jpeg'

export const HeaderWrapper = style.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #FFFFFF;
`

export const HeaderInputWrapper = style.div`
  display: flex;
  justify-content: center;
`
export const CustomHeader = style.header`
  background-image: url(${backGroundImg.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const HeaderTitle = style.h1`
  margin-bottom: 6px;
`

export const CustomButton = style.button`
  border: none;
  background-color: inherit;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  position: absolute;
  top: 30px;
  left: 40px;
  color: #FFFFFF;
`
export const AvatarImage = style.img`
  width: 119px;
  height: 119px;
  border-radius: 50%;
`