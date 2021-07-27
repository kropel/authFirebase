import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'

import rootReducer from '../reducers'

const logger = (store) => (next) => (action) => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const store = createStore(
  rootReducer,
  { counter: 0 },
  composeWithDevTools(applyMiddleware(logger, ReduxThunk))
)

export default store
