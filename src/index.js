import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'

import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import { applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import App from './components/App'
import rootReducer from './reducers'
import { getUsers } from './actions/users.actions'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
)

store.dispatch(getUsers())


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
