// import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Home from './components/Home'
import Register from './components/authentication/Register'
import Login from './components/authentication/Login'
import PlantPictures from './components/plants/PlantPictures'
import Navbar from './components/navbar/Navbar'
import UserProfile from './components/plants/UserProfile'


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path = "/plant_pictures/:id">
          <UserProfile />
        </Route>
        <Route path = "/plant_pictures/">
          <Navbar />
          <PlantPictures />
        </Route>
        <Route path = "/register/">
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
