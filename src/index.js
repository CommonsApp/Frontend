import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducers from './reducers' // Or wherever you keep your reducers

import Members from './components/Members'
import Legislation from './components/Legislation'
import Profile from './components/Profile'

// Create Browser History
const history = createHistory()
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <div>
      <ConnectedRouter history={history}>
        <div>
        <Route path="/members" component={Members}/>
        <Route path="/members/:id" component={Profile}/>
        <Route path="/legislation" component={Legislation}/>
        <Route path="/" component={Members}/>
        </div>
      </ConnectedRouter>
    </div>
  </Provider>,
  document.getElementById('root')
)
