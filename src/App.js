import React, { useState, useEffect } from 'react'
import './App.css'
import Container from '@material-ui/core/Container'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'

import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import All from './components/All'
import View from './components/View'
import New from './components/New'
import firebase from './firebase'

const theme = createMuiTheme()

function App() {

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navigation />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/new" component={New}/>
              <Route path="/about" component={About}/>
              <Route path="/all" component={All}/>
              <Route path="/view-albums" component={View} />
            </Switch>
          </Container>
        </div>
      </Router>
    </MuiThemeProvider>
  )
}

export default App
