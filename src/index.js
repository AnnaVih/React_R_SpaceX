import React from 'react'
import ReactDOM from 'react-dom'

import { Provider as ReduxProvider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/global.scss'

import store from './redux/store'

import App from './App'

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
)
