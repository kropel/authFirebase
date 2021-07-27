import React from 'react'
import { Provider } from 'react-redux'

import Counter from './containers/Counter/Counter'
import store from './store'
import CounterHook from './containers/CounterHook/CounterHook'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
        <CounterHook />
      </div>
    </Provider>
  )
}

export default App
