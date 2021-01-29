import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setTours(data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])
  if (isLoading) {
    return <main>
      <Loading />
    </main>
  }
  if (tours.length === 0) {
    return <main>
      <div className="title">
        <h2>No Tours Left</h2>
        <div className="underline"></div>
        <button className='btn' onClick={fetchTours}>Refresh</button>
      </div>
    </main>
  }
  return <main>
    <Tours tours={tours} removeTour={removeTour} />
  </main>
}

export default App
