import React from 'react'
import DefaultTheme from './styles/theme/default'

import { ThemeProvider } from 'styled-components'
import GlobalStyled from './styles/global'
import Routes from './routes'

const App = () => (
  <ThemeProvider theme={DefaultTheme}>
    <Routes />
    <GlobalStyled />
  </ThemeProvider>
)

export default App
