import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import plantmom from '../../assets/plantmom.jpeg'



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
      const { data } = await axios.post('/api/auth/login/', formdata)
      console.log('data.token', data.token)
      setTokenToLocalStorage(data.token)
      setFormdata(data)
      history.push('/plant_pictures/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-half">
            <img src={plantmom} alt="plantmom"/>
          </div>
          <div className="column is-vcentered ">
            <div className="has-text-centered">
              <h1 className ="is-size-1 title mb-6">PLANTM🌻M</h1>
            </div>
            <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter">
              <div className="field">
                <label className="label mb-4">Email</label>
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
                <label className="label mb-4">Password</label>
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
                <button type="submit" className="button is-fullwidth is-warning mb-4">Login</button>
              </div>
              <hr/>
              <div className="field mb-4"></div>
              <div className="field mb-4"><p className="mb-4"> Do not have an account?<Link to="/register/">SignUp</Link></p></div>
            </form>
          </div>
        </div>

      </div>
    </section>



  )

}

export default Login

