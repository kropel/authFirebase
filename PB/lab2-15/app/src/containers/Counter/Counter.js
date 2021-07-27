import { connect } from 'react-redux'

import Counter from '../../components/Counter/Counter'
import { increment, decrement } from '../../actions/counter'

// selector
const getCounter = (state) => state.counter

const mapStateToProps = (state) => ({
  count: getCounter(state),
})

const mapDispatchToProps = {
  onIncrement: increment,
  onDecrement: decrement,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
