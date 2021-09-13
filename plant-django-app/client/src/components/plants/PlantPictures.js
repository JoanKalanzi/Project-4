import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../navbar/auth'
import PlantCard from './PlantCard'
import {  useHistory } from 'react-router-dom'
// import Family from './Family'


const PlantPictures = () => {
  const [picture, setPicture] = useState([])
  const [hasError, setHasError] = useState(false)
  // const { id } = useParams()
  const history = useHistory()




  useEffect(() => {
    const getData = async () => {

      try {
        const { data } = await axios.get('/api/plant_pictures/',
          {
            headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
          }
        )
        setPicture(data)
        console.log('data---->',data.id)
        console.log('data', data)
        history('/plant_pictures/id')


      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
 

  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`https://ga-cheesebored.herokuapp.com/cheeses/${id}`, {
  //       headers: { 
  //         Authorization: `Bearer ${getTokenFromLocalStorage()}`, 
  //       },
  //     })
  //     history.push('/cheeses')
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // console.log('picture', picture)

  // const userIsOwner = (userId) => {
  //   const payload = getPayload()
  //   if (!payload) return false
  //   return userId === payload.sub
  // }

  return (

    <section className="section">
      <div className="container">
        {picture ?
          <div className="columns is-multiline">
            {picture.map(item => (< PlantCard key={item.id} owner={item.owner} image ={item.image} title ={item.title} comments ={item.comments} id ={item.id }  />
            
          

            ))}
          </div>


          :
          <h2 className="title has-text-centered">
            {hasError ? 'Something went wrong 😞' : '...loading 🧀 '}
          </h2>
        }
      </div>
    </section>
  )
}
export default PlantPictures