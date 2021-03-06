import React, { Fragment } from 'react'
import Login from './views/login'
import Home from './views/home'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route path="/login" component={ Login } />
          <Route path="/home" component={ Home } />
          <Route exact path="/" component={ Login } />
          <Redirect to={ "/login" } />
        </Switch>
      </HashRouter>
    </Fragment>
  )
}

export default App
