import React, { useState } from 'react'
import { Link  } from 'react-router-dom'
import { getTokenFromLocalStorage, getPayload } from '../navbar/auth'
import axios from 'axios'


const PlantCard = ({ id ,title, image, owner, comments }) => {
  
  console.log('id----', id)

  const userIsAuthenticated = () => {
    const payload = getPayload()
    if (!payload) return false
    const now = Math.round(Date.now() / 1000)
    console.log('payload---->', payload)
    console.log('now--->', now < payload.exp)
    return now < payload.exp
    
  }
  const [formData, setFormData] = useState({
    text: '',
    pictures: '1',
  })

  const handleChange = (event) => {
    console.log('changing')
    const commenting = { ...formData, [event.target.name]: event.target.value }

    setFormData(commenting)
    
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      console.log('id---->',id)
      await axios.post(
        
        '/api/comments',
        formData,

        {
          headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
        }
      )
      console.log('formData--->' ,formData)
    } catch (err) {
      console.log(err)
    }
  }
  console.log('comments----->', comments
  )
 


  return (
    <>
      <div className="column is-one-quarter-desktop is-one-third-tablet">
        <Link to={`/plant_pictures/${id}`}>
          <div className="card">
            <div className="card-header">
              <div className="card-header-title">
                <figure className="image is-48x48 m-4 ">
                  <img className="is-rounded" src={owner.profile_image} />
                </figure>
                <p>{owner.username}</p>
              </div>
            </div>
            <div className="card-image">
              <figure className="image image-is-1by1">
                <img src={image} alt={title} />
              </figure>
            </div>
            <div className="card-content">

              <p>Plantname :{title}</p>
            </div>
            <div className="comments"> {comments.map(item => {
              return (<div key={item.id}>
                <figure className="image is-48x48 m-4 ">
                  <img className="is-rounded" src={item.owner.profile_image} />
                  <p>{item.text}</p>
                </figure>
                <img src={item.owner.profile_image} /> <p>{item.text}</p>
              </div>)
            })}
            </div>
          </div>
        </Link>

        <div>
          {userIsAuthenticated() ?
            <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter">
              <div className="field">
                <label className="label mb-4">Comment</label>
                <div className="control">
                  <input
                    onChange={handleChange}
                    className="input"
                    placeholder="Write a comment"
                    name="text"
                    value={formData.text}
                  />
                  <div className="field">
                    <button type="submit" className="button is-fullwidth is-warning">Post</button>
                  </div>
                </div>
              </div>
            </form>
            :
            <div></div>
          }
        </div>
      </div>

    </>

  )
}

export default PlantCard
