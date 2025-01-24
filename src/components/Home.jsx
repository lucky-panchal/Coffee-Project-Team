import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();
    
  return (
    <div>
        <button onClick={() => navigate('/register')}>Register</button>
      
      <br />
      
      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  )
}

export default Home
