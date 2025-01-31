 import React from 'react'
 import './Home.css'
 import bgImg from './images/bg-img.jpg'
import Main from './main/Main';
 
 function Home() {
   return (
     <div className='home-contain' style={{backgroundImage: `url(${bgImg})`}}>
        <div className="content">
            <div className="navbar">
              <div className="menu">
                <button>link 1</button>
                <button>link 1</button>
                <button>link 1</button>
                <button>link 1</button>
              </div>
              <h1>Coldheart</h1>
              <div className="user-acc">
                and
              </div>
            </div>
            <Main/>
        </div>
     </div>
   )
 }
 
 export default Home;