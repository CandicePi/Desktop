import { use, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEarthquakes } from './reducers/earthquakeReducer'
import './App.css'

function App() {
 const dispatch = useDispatch()
 const { data, loading,error} = useSelector((state) => state.earthquake)
 
 const [starttime, setStartime] = useState("")
 const [endtime, setEndtime] = useState("")
 const [magnitude, setMagnitude] = useState("")

 function handleClick() {
  dispatch(fetchEarthquakes({starttime, endtime, magnitude}))
  console.log(data)
 }

  return (
    <div>
      <h1>🌎Earthquake data</h1>
      <div>
        <input type="date" value={starttime} onChange={(e) => setEndtime(e.target.value)}/>
        <input type="endtime" value={endtime} onChange={(e) => setEndtime(e.target.value)} />
        <input type="magnitude"  value={magnitude} onChange={(e) => setMagnitude(e.target)}/>
        <button onClick={handleClick}>Fetch</button>
      </div>
    </div>
  )
}

export default App
