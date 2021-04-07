import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRoute from './app.route'
// import AuthRoute from './auth.route'

const Routes = () => (
  <BrowserRouter>
    {/* <AuthRoute /> */}
    <AppRoute />
  </BrowserRouter>
)

export default Routes
