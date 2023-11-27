import React from 'react'
import CounterIndicator from './components/CounterIndicator'
import CounterButtons from './components/CounterButtons'
import Wheat from './components/Wheat/Wheat'

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="lin-card has-space-top text-center">
            <CounterIndicator />
            <CounterButtons />
            <Wheat />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
