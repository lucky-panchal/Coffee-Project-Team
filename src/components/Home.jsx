import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container"> {/* Use the container class */}
      <button className="button" onClick={() => navigate('/register')}>Register</button>
      <button className="button" onClick={() => navigate('/login')}>Login</button>
    </div>
  );
}

export default Home;