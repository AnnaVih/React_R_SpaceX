import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'
import HomePage from './containers/HomePage'
import InfoPage from './containers/InfoPage'
import RocketsList from './containers/RocketsList'
import Rocket from './containers/Rocket'
import LaunchesList from './containers/LaunchesList'
import Launch from './containers/Launch'
import BlogList from './containers/BlogList'
import Blog from './containers/Blog'
import Login from './containers/Login'
import Register from './containers/Register'
import NoFoundPage from './components/NoFoundPage'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/info" component={InfoPage} />
        <Route exact path="/rockets" component={RocketsList} />
        <Route path="/rockets/:id" component={Rocket} />
        <Route exact path="/launches" component={LaunchesList} />
        <Route path="/launches/:id" component={Launch} />
        <Route exact path="/blogs" component={BlogList} />
        <Route path="/blogs/:id" component={Blog} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route component={NoFoundPage} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App
