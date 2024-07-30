import { useEffect, useState } from 'react'
import Lines from '../Userinfo/Userinfo'
import "./OrbitCollection.css"
import Userinfo from '../Userinfo/Userinfo'

function OrbitCollection({users}) {
    // console.log(users.array)
    // const [users, setusers] = useState(users || [])
 

 


 
  return (
   
      <div className='orbitContainer'> 
        <div className='users' >
        {
          users?.array?.length !== 0 ? (
          users?.array?.map((user, i)=>{
            return <div  className='user' >
                <img className='profilepic' src={user.img} alt=  {user.name} />
                <div className='userinfoSection' >  <Userinfo  user={user} /></div>
            
            </div>
          })) : 'Loading ...'
        }
        </div>
       
       
      </div>
     
    
  )
}

export default OrbitCollection
