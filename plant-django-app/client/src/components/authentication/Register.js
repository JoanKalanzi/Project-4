import React, { useState } from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap'
import { useHistory } from 'react-router'


const Register = () => {

  const History = useHistory()

  const [formdata, setFormData] = useState({
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    password_confirmation: '',
    profile_image: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    password_confirmation: '',
    profile_image: '',
  })

  const handleChange = (event) => {
    const formValue = { ...formdata, [event.target.name]: event.target.value }
    setFormData(formValue)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('api/auth/register/', formdata)
      History.push('/')
    } catch (err) {
      console.log('err.response.data', err.response.data)
      setErrors(err.response.data)
      
    }
  }



  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter">
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  onChange={handleChange}
                  value={formdata.username}
                  className="input"
                  placeholder="Username"
                  name="username"
                />
              </div>
              {errors.username && <p className="help is-danger">{errors.username}</p>}
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  onChange={handleChange}
                  value={formdata.email}
                  className="input"
                  placeholder="Email"
                  name="email"
                />
              </div>
              {errors.email && <p className="help is-danger">{errors.email}</p>}
            </div>
            <div className="field">
              <label className="label">Firstname</label>
              <div className="control">
                <input
                  onChange={handleChange}
                  value={formdata.firstname}
                  className="input"
                  placeholder="Firstname"
                  name="firstname"
                />
              </div>
              {errors.firstname && <p className="help is-danger">{errors.firstname}</p>}
            </div>
            <div className="field">
              <label className="label">Lastname</label>
              <div className="control">
                <input
                  onChange={handleChange}
                  value={formdata.lastname}
                  className="input"
                  placeholder="Lastname"
                  name="lastname"
                />
              </div>
              {errors.lastname && <p className="help is-danger">{errors.lastname}</p>}
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  onChange={handleChange}
                  value={formdata.password}
                  className="input"
                  placeholder="Password"
                  name="password"
                />
              </div>
              {errors.password && <p className="help is-danger">{errors.password}</p>}
            </div>
            <div className="field">
              <label className="label">PasswordConfirmation</label>
              <div className="control">
                <input
                  type="password"
                  onChange={handleChange}
                  value={formdata.password_confirmation}
                  className="input"
                  placeholder="Password confirmation"
                  name="password_confirmation"
                />
              </div>
              {errors.password_confirmation && <p className="help is-danger">{errors.password_confirmation}</p>}
            </div>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Add profile image file</Form.Label>
              <Form.Control
                type="file"
                onChange={handleChange}
                value={formdata.profile_image}
                className="input"
                placeholder="ProfileImage"
                name="profile_image"
              />
            </Form.Group>
            {errors.profile_image && <p className="help is-danger">{errors.profile_image}</p>}
            <div className="field">
              <button type="submit" className="button is-fullwidth is-warning">Register </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register