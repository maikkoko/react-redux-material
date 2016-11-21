import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export const Counter = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {props.counter}</h2>
    <RaisedButton onClick={props.increment}>
      Increment
    </RaisedButton>
    {' '}
    <RaisedButton onClick={props.doubleAsync}>
      Double (Async)
    </RaisedButton>
  </div>
)

Counter.propTypes = {
  counter     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Counter
