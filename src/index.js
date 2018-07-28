import React from 'react'
import ReactDOM from 'react-dom'

import { Provider as ReduxProvider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'

import 'bootstrap/dist/css/bootstrap.min.css'
import { createRenderer } from 'fela'
import { Provider as FelaProvider } from 'react-fela'
import './styles/global.scss'

import App from './App'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
const renderer = createRenderer()

ReactDOM.render(
  <ReduxProvider store={createStoreWithMiddleware(reducers)}>
    <FelaProvider renderer={renderer}>
      <App />
    </FelaProvider>
  </ReduxProvider>,
  document.getElementById('root')
)
