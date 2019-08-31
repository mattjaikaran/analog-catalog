import React from 'react'
import './App.css'

import Navigation from './components/Navigation'
import All from './components/All'
import View from './components/View'
import New from './components/New'

function App() {
  return (
    <div className="App">
      <Navigation />
      <New />
      <All />
      <View />
    </div>
  )
}

export default App
