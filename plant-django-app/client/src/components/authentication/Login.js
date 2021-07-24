import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const history = useHistory()

  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const formValue = { ...formdata, [event.target.name]: event.target.value }
    setFormdata(formValue)
  }

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('api/auth/login/', formdata)
      setTokenToLocalStorage(data.token)
      history.push('/plant_pictures')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form  onSubmit = {handleSubmit} className="column is-half is-offset-one-quarter">
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  onChange={handleChange}
                  className="input"
                  placeholder="Email"
                  name="email"
                  value={formdata.email}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  onChange={handleChange}
                  className="input"
                  placeholder="Password"
                  name="password"
                  value={formdata.password}
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-warning">Login</button>
            </div>
          </form>
        </div>
        <div>{ <p> Do not have an account? <Link to ="/register">SignUp</Link></p> }</div>
      </div>
    </section>

  )

}

export default Login

