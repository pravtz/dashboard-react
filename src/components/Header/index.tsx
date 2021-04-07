import React from 'react'

import { Container, Brand, StatusMain, WapperStatus } from './styled'

const Header = () => (
  <Container>
    <Brand>
      <h1>Dashboard</h1>
    </Brand>
    <StatusMain>
      <WapperStatus>
        <ul>
          <li>SingIn</li>
          <li>SingUp</li>
        </ul>
      </WapperStatus>
    </StatusMain>
  </Container>
)
export default Header
