import style from 'styled-components'

export const SectionWrapper = style.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding-top: 0px;
`