import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lines from './components/lines/Lines'

function App() {
  const [count, setCount] = useState(0)

  const data = [[1], [1,2,3], [1,2,3,4] [1,2,3] , [1,2] , [1,2,3,4,5,6,7] ,[1,2] ]

  return (
  
      <div className='homeContainer'>
        <div className='linesContainer' >
        {
          data.map((i)=>{
            return < Lines key={i} />
          })
        }
        </div>
       
       
      </div>
     
    
  )
}

export default App
