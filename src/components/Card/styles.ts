import styles from 'styled-components'

export const CardWrapper = styles.div.attrs((props: {backGround: string}) => props)`
  height: 170px;
  background-image: url(${(props) => props.backGround});
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: end;
  background-position: center; 
`
export const CardTitle = styles.h2`
  color: #FFFFFF;
  margin-left: 10px;
  margin-bottom: 10px;
`