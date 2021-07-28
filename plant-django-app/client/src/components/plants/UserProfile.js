// import React, from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import { getTokenFromLocalStorage } from '../navbar/auth'
// import UserProfileCard from './UserProfileCard'

// const UserProfile = () => {
//   const [plant, setPlant] = useState([])
//   const [hasError, setHasError] = useState(false)
//   const { id } = useParams()
//   // const history = useHistory()

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const { data } = await axios.get(`/api/plant_pictures/${id}`, {
//           headers: {
//             Authorization: `Bearer ${getTokenFromLocalStorage()}`,
//           },

//         })
//         console.log('data--->', data)
//         setPlant(data)
//       } catch (err) {
//         setHasError(true)
//       }
//     }
//     getData()
//   }, [id])

//   console.log(plant)
//   console.log(hasError)
//   // const userIsOwner = (userId) => {
//   //   const payload = getPayload()
//   //   if (!payload) return false
//   //   return userId === payload.sub
//   // }

//   // const handleDelete = async () => {
//   //   try {
//   //     await axios.delete(`/api/${id}`, {
//   //       headers: { 
//   //         Authorization: `Bearer ${getTokenFromLocalStorage()}`, 
//   //       },
//   //     })
//   //     history.push('/plant_pictures')
//   //   } catch (err) {
//   //     console.log(err)
//   //   }
//   // }
//   // console.log()
//   return 
//   <div> {plant.map(item =>(< UserProfileCard key={item.id} owner={item.owner}/>)
//     // eslint-disable-next-line keyword-spacing
      


//    // eslint-disable-next-line indent
//    )}</div>

  
// }

// export default UserProfile
