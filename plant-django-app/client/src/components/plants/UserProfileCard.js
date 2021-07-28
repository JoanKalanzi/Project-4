import React from 'react'

const UserProfileCard = ({ owner }) => {



  return (
    <figure className="image is-48x48 m-4 ">
      <img className="is-rounded" src={owner.image} />
    </figure>
  )
}


export default UserProfileCard