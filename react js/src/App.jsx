import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import OrbitCollection from './components/Orbitcollection.jsx/Orbitcollection'

function App() {
  const [orbitsList] = useState([0,1,2,3,4,5,6,7,8])
  const [users, setusers] = useState([])
  useEffect(() => {
    const fetchData = async ()=>{
      try {
        const data = await fetch('https://xsrr-l2ye-dpbj.f2.xano.io/api:oUvfVMO5/receive_week?start_date=2024-1-8%20')
  
        let resp =await data.json()
        // console.log(resp[0])
        setusers(resp)
      } catch (error) {
         alert('Error fetching data. Refresh page')
      }
    }
    fetchData()
   
  }, [])




  return (
  
      <div className='homeContainer'>
        <div className='linesContainer' > 
        {
          orbitsList.length !== 0 && users.length !== 0 ? (
          orbitsList?.map((i)=>{
            return < OrbitCollection key={i} users={users[i]} />
          })) : 'Loading ...'
        }
        </div>
       
       
      </div>
     
    
  )
}

export default App
