import React from 'react'
import Aside from '../Aside'
import Header from '../Header'

import { Container, MainContent } from './styled'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <Container>
    <Header />
    <Aside />
    <MainContent>{children}</MainContent>
  </Container>
)

export default Layout
