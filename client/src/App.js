import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import CoronaTracker from './components/CoronaTracker/CoronaTracker'
import News from './components/News/News'
// import './App.css'

function App() {
  return (
      <main>
          <Switch>
              <Route path='/Home' component={Home} exact/>
              <Route path='/CoronaTracker' component={CoronaTracker}/>
              <Route path='/News' component={News}/>
          </Switch>
      </main>
  )
}

export default App