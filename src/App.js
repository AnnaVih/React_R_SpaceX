import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/info" component={AboutPage} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App
