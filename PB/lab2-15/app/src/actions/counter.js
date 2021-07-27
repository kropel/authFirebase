export const ACTION_TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
}

export const increment = () => {
  return (dispatch, getState) => {
    const { counter } = getState()

    if (counter > 3) return
    console.log('getState()', getState())
    dispatch({ type: ACTION_TYPES.INCREMENT })
    // setTimeout(() => dispatch({ type: ACTION_TYPES.INCREMENT }), 2000)
  }
}

export const decrement = () => ({ type: ACTION_TYPES.DECREMENT })
