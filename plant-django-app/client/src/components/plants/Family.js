import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Family = () => {

  const [family, setFamily] = useState([])
  const [errors, setErrors] = useState(false)
  const { id } = useParams()


  useEffect(() => {

    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/plant_family/${id}`)
        console.log('family---->', data.id)

        setFamily(data)
      } catch (error) {
        setErrors(true)
      }
    }
    getData()
  }, [id])
  console.log('family', family)

  return (
    <>
      {family ?

        <div className="card-content">
          {family.map(item => (
            <div key={item.id}> {item.name}</div>
          ))}
        </div>

        :
        <h2 className="title has-text-centered">
          {errors ? 'Something has gone wrong!' : 'loading'}
        </h2>
      }
    </>
  )
}
export default Family

