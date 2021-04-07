import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Wrapper, Brand, WrapperForm } from './styled'

const SingIn = () => (
  <Container>
    <Wrapper>
      <Brand></Brand>
      <WrapperForm action="">
        <input type="email" name="" id="" placeholder="Username" />
        <input type="password" name="" id="" placeholder="Password" />
        <button type="submit">Entra</button>
      </WrapperForm>
      <Link to="/auth/forgot">Did you forget your password?</Link>
      <Link to="/auth/forgot">Are you not registered?</Link>
    </Wrapper>
  </Container>
)
export default SingIn
