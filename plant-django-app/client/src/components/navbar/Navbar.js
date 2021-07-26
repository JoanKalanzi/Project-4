import React from 'react'
import { Link , useHistory } from 'react-router-dom'
import { getPayload } from './auth'




const Navbar = () => {

  const history = useHistory()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  const userIsAuthenticated = () => {
    const payload = getPayload()
    if (!payload) return 
    const currentTime = Math.round(Date.now() / 1000)
    currentTime < payload.exp
  }
  

  return (
    <nav className="navbar is-warning ">
      <div className="container">
        <div className="navbar-brand">
          <span role="img" className="title">
            <Link to="/">🧀</Link>
          </span>
        </div>
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to="/cheeses">See all cheeses</Link>
          </div>
        </div>
        <div className="navbar-end">
          {!userIsAuthenticated() ?
            <>
              <div className="navbar-item">
                <Link to="/register">Register</Link>
              </div>
              <div className="navbar-item">
                <Link to="/login">Login</Link>
              </div>
            </> :
            <button className="button is-dark" onClick={handleLogout}>Log out</button>
          }
        </div>
      </div>
    </nav>
  )





}
export default Navbar