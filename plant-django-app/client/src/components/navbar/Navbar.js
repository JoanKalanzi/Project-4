import React from 'react'
import { Link, useHistory } from 'react-router-dom'
// import { getPayload } from './auth'




const Navbar = () => {

  const history = useHistory()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  // const userIsAuthenticated = () => {
  //   const payload = getPayload()
  //   if (!payload) return
  //   const currentTime = Math.round(Date.now() / 1000)
  //   currentTime < payload.exp
  // }


  return (
    <nav className="navbar is-warning ">
      <div className="container">
        <div className="navbar-brand">
          <div className="title is-dark m-4">
            <Link to="/plant_pictures">PLANTM🌻M</Link>
          </div>

        </div>
        <div className="navbar-end">
          <figure className="image is-48x48 m-4 ">
            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
          <button className="button is-dark m-4" onClick={handleLogout}>Log out</button>
        </div>
      </div>
    </nav>
  )





}
export default Navbar