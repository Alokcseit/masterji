import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
<>
  <h1>Welcome to the Home Page!</h1>
<div style={{display:"flex",flexDirection:"row",gap:"10px" }}>
<Link to="/course"> Course</Link>
<Link to="/batches"> Batches</Link>
<Link to="/otp">otp</Link>

</div>

</>
  )
}

export default Home