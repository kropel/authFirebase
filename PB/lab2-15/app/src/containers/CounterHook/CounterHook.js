import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement } from '../../actions/counter'
import Counter from '../Counter/Counter'

const CounterHook = (props) => {
  const count = useSelector((state) => state.counter)

  const dispatch = useDispatch()

  const onIncrement = () => dispatch(increment())
  const onDecrement = () => dispatch(decrement())

  return (
    <Counter
      {...props}
      count={count}
      onInrement={onIncrement}
      onDecrement={onDecrement}
    />
  )
}

export default CounterHook
