import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// Pages components
import Layout from './hoc/Layout/Layout'
import HomePage from './containers/Pages/HomePage'
import InfoPage from './containers/Pages/InfoPage'
import RocketsList from './containers/Pages/RocketsList'
import Rocket from './containers/Pages/Rocket'
import LaunchesList from './containers/Pages/LaunchesList'
import Launch from './containers/Pages/Launch'
import BlogList from './containers/Pages/BlogList'
import Blog from './containers/Pages/Blog'
import Login from './containers/Pages/Login'
import Register from './containers/Pages/Register'
import Navigation from './containers/Navigation/NavigationContainer'
import Footer from './components/Layout/Footer/Footer'
import Aux from './hoc/Aux/Aux'

library.add(faBars)

const App = () => (
  <Aux>
    <Navigation />
    <Route exact path="/" component={HomePage} />
    <Route path="/info" component={InfoPage} />
    <Layout>
      <Switch>
        <Route path="/rockets" component={RocketsList} />
        <Route path="/rockets/:id" component={Rocket} />
        <Route path="/launches" component={LaunchesList} />
        <Route path="/launches/:id" component={Launch} />
        <Route path="/blog" component={BlogList} />
        <Route path="/blogs/:id" component={Blog} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Layout>
    <Footer />
  </Aux>
)
export default App
