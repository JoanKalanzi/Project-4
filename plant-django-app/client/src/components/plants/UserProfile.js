// import React, from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import { getTokenFromLocalStorage } from '../navbar/auth'
// // import UserProfileCard from './UserProfileCard'

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
//   // <div> {plant.map(item =>(< UserProfileCard key={item.id} owner={item.owner}/>)
//   //   // eslint-disable-next-line keyword-spacing
      


//   //  // eslint-disable-next-line indent
//   //  )}</div>

//   // <section className="section">
//   //   <div className="container">
//   //     {plant ?
//   //       <div>
//   //         <h2 className="title has-text-centered">{plant.name}</h2>
//   //         <hr />
//   //         <div className="columns">
//   //           <div className="column is-half">
//   //             <figure className="image">
//   //               <img src={plant.image} alt={plant.name}/>
//   //             </figure>
//   //           </div>
//   //           <div className="column is-half">
//   //             <h4 className="title is-4"><span role="img" aria-label="plate">🍽</span> Tasting Notes</h4>
//   //             <p>{plant.family}</p>
//   //             <hr />
//   //             <h4 className="title is-4"><span role="img" aria-label="globe">🌍</span> Origin</h4>
//   //             <hr />
//   //             <p>{plant.user.profile_image}</p>
//   //             <hr />
//   //             <h4 className="title is-4"><span role="img" aria-label="wave">🖐</span> Added By</h4>
//   //             <hr />
//   //             <p>{plant.user.username}</p>
//   //             <hr />
//   //             {userIsOwner(plant.user._id) &&
//   //               <div className="buttons">
//   //                 <button onClick={handleDelete} className="button is-danger">Delete Cheese</button>
//   //                 {/* <Link to={`/cheeses/${id}/edit`} className="button is-warning">Edit Cheese</Link> */}
//   //               </div>
//   //             }
//   //           </div>
//   //         </div>
//   //       </div>
//   //       :
//   //       <h2 className="title has-text-centered">
//   //         {hasError ? 'Oh something went wrong, the sadness 😞' : '...loading 🧀 '}
//   //       </h2>
//   //     }
//   //   </div>
//   // </section>
 
// }

// export default UserProfile
