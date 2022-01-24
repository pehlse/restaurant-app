import style from 'styled-components'

import backGroundImg from '../../../../public/background2.jpeg'

export const HeaderWrapper = style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
`

export const HeaderInputWrapper = style.div`
  display: flex;
  justify-content: center;
`
export const CustomHeader = style.header`
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backGroundImg.src});
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

  span {
    margin-left: 4px;
  }
`
export const AvatarImage = style.img`
  width: 119px;
  height: 119px;
  border-radius: 50%;
  margin-right: 16px;
`
export const CustomTitle = style.h2`
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 45px;
  text-align: left;
  margin-bottom: 5px;
`
export const CustomSubtitle = style.h3`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
`