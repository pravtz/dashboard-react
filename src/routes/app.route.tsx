import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Layout from '../components/Layout'
import Lists from '../pages/Lists'

const AppRoutes = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/users" exact component={Lists} />
    </Switch>
  </Layout>
)

export default AppRoutes
