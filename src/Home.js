import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
<>
  <h1>Welcome to the Home Page!</h1>
  <Link to="/course"> Course</Link>
  <Link to="/batches"> Batches</Link>

</>
  )
}

export default Home