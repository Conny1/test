import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lines from './components/lines/Lines'

function App() {
  const [users, setusers] = useState([])


useEffect(() => {
  const fetchData = async ()=>{
    try {
      const data = await fetch('https://xsrr-l2ye-dpbj.f2.xano.io/api:oUvfVMO5/receive_week?start_date=2024-1-8%20')

      let resp =await data.json()
      // console.log(resp)
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
          users.length !== 0 ? (
          users[0]?.array?.map((user, i)=>{
            return < Lines key={`${user.id}${i}`} />
          })) : 'Loading ...'
        }
        </div>
       
       
      </div>
     
    
  )
}

export default App
