// import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/authentication/Register'
import Login from './components/authentication/Login'
import PlantPictures from './components/PlantPictures'


const App = () => {

  // useEffect(() => {

  //   const getData = async () => {
  //     //  install at axios yarn add axios
  //     const res = await fetch('/api/plant_pictures')
  //     const data = await res.json()
  //     console.log(data)
  //   }
  //   getData()
  // })

  return (
    <BrowserRouter>
      <Switch>
        <Route path="plant_pictures">
          <PlantPictures />
        </Route>
        <Route path="/">
          <Home />
          <Register />
          <Login />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App
