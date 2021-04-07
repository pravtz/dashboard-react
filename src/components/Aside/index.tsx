import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Wrapper, TitleMenu, WrapperMenu } from './styled'

const Aside = () => (
  <Container>
    <Wrapper>
      <TitleMenu>Menu</TitleMenu>
      <WrapperMenu>
        <ul>
          <li>
            <Link to="/">My Work</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </WrapperMenu>
    </Wrapper>
  </Container>
)

export default Aside
