import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
    'MH MH'
    'AS CT';

  height: 100vh;
`

export const MainContent = styled.div`
  grid-area: CT;
`
