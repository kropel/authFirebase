import React from 'react'

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      Counter: <strong>{count}</strong>
      <div>
        <button onClick={onIncrement}>increment</button>
        <button onClick={onDecrement}>decrement</button>
      </div>
    </div>
  )
}

export default Counter
