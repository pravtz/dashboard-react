import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SingIn from '../pages/auth/SingIn'
import SingUp from '../pages/auth/SingUp'

const AppRoutes = () => (
  <Switch>
    <Route path="/auth/login" exact component={SingIn} />
    <Route path="/auth/register" exact component={SingUp} />
  </Switch>
)

export default AppRoutes
