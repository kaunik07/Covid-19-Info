import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import CoronaTracker from './components/CoronaTracker/CoronaTracker'
import './App.css'

function App() {
  return (
      <main>
          <Switch>
              <Route path='/' component={Home} exact/>
              <Route path='/CoronaTracker' component={CoronaTracker}/>
          </Switch>
      </main>
  )
}

export default App