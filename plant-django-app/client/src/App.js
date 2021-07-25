// import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Home from './components/Home'
import Register from './components/authentication/Register'
import Login from './components/authentication/Login'
// import PlantPictures from './components/PlantPictures'


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path = "/register">
          <Register />
        </Route>
        <Route path="/">
          <Login />
        </Route>  
      </Switch>
    </BrowserRouter>
  )
}

export default App
