import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Layout from '../components/Layout'

const AppRoutes = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Dashboard} />
    </Switch>
  </Layout>
)

export default AppRoutes
