import React from 'react'
import ReactDOM from 'react-dom'

import { Provider as ReduxProvider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/global.scss'

import App from './App'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <ReduxProvider store={createStoreWithMiddleware(reducers)}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
)
