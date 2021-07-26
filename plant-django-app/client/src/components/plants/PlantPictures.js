import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../navbar/auth'


const PlantPictures = () => {
  const [picture, setPicture] = useState([])




  useEffect(() => {
    const getData = async () => {

      try {
        const { data } = await axios.get('/api/plant_pictures',
          {
            headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
          }
        )
        setPicture(data)
        console.log('data', data)

      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  console.log('picture', picture)

  return (
    <div>I am plant pictures</div>
  )
}
export default PlantPictures