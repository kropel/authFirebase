import { ACTION_TYPES } from '../actions/counter'

const rootReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case ACTION_TYPES.DECREMENT:
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}

export default rootReducer
