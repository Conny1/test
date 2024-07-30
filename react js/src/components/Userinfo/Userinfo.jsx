import React from 'react'
import './Userinfo.css'


const Userinfo = ({user}) => {
  console.log(user)
  if(user.length === 0){
    return <>Loading...</>
  }

  return (
    <div className='lineBlock' >
      <div>
        <img className='profilepic' src={user.img} alt={user.name} />
        <div>
          <p>{user.name} </p>
          <p>{user.position} </p>
          <p>{user.city} </p>
        </div>
      </div>
    
    </div>
  )
}

export default Userinfo