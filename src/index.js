import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router-dom'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import reducers from './reducers' // Or wherever you keep your reducers

import Members from './components/Members'
import LegislationList from './components/legislation/LegislationList'
import LegislationView from './components/legislation/LegislationView'
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
        <Route path="/members/:id" component={Profile}/>
        <Route exact path="/members" component={Members}/>
        <Route path="/legislation/:id" component={LegislationView}/>
        <Route exact path="/legislation" component={LegislationList}/>
        <Route exact path="/" component={Members}>
        </Route>
        </div>
      </ConnectedRouter>
    </div>
  </Provider>,
  document.getElementById('root')
)
