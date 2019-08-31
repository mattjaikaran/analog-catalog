import React from 'react'
import './App.css'
import Container from '@material-ui/core/Container'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './components/Home'
import All from './components/All'
import View from './components/View'
import New from './components/New'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Container>
            <Route exact path="/" component={Home} />
            <Route path="/new" component={New}/>
            <Route path="/all" component={All}/>
            <Route path="/view-album" component={View} />
          </Container>
        </Switch>
      </div>
    </Router>
  )
}

export default App
