import React, { useState } from 'react'
import './Home.css'
import bgImg from './images/bg-img.jpg'
import Main from './main/Main';
import Filter from './filter/Filter';
import { useNavigate } from 'react-router-dom';

function Home() {

  const [box, setBox] = useState("none");
  const navigate = useNavigate();

  const handleFilter = () => {
    const filter = document.querySelector('.filter-contain');
    if (filter.style.display === 'none') {
      filter.style.display = 'flex';
    } else {
      filter.style.display = 'none';
    }
  }

  const handleAccOption = () => {
      if(box === "none"){
        setBox("flex");
      }else{
        setBox("none")
      }
  }

  return (
    <div className='home-contain' style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="content">
        <div className="navbar">
          <div className="menu">
            <svg onClick={handleFilter} className='filtericon' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" /></svg>
            <button>link 1</button>
            <button>link 1</button>
            <button>link 1</button>
            <button>link 1</button>
          </div>
          <h1>Coldheart</h1>
          <div className="user-acc">
            <div className="glass-contain">
              <div className="other-btn">
                <div className="search-bar">
                  <input type="text" placeholder='Search...' />
                </div>
                <div className="notification">

                  <span>1</span>
                  <svg className='notify-ico' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e8eaed"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" /></svg>

                </div>
                <div className="cart">

                  <span>1</span>
                  <svg className='cart-ico' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e8eaed"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" /></svg>

                </div>
              </div>
              <div className="acc" >
                <svg onClick={handleAccOption} className='account-btn' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
              </div>
            </div>
            <div className="acc-option" style={{display: `${box}`}}>
              <span onClick={() => navigate('/login')}>sign in</span>
              <span onClick={() => navigate('/register')}>sign up</span>
            </div>
          </div>
        </div>
        <Main />
        <Filter />
      </div>
    </div>
  )
}

export default Home;