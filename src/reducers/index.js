import { combineReducers } from 'redux'
import router from './router'
import representatives from './representatives'

const reducer = combineReducers({
  router,
  representatives
})

export default reducer
