import React from 'react'
import { useState } from 'react'
import "./Counter.css"
import { Link } from 'react-router-dom'
function Counter() {
// eslint-disable-next-line react-hooks/rules-of-hooks
let [first, setfirst ] = useState(0)

const maximum = () => {
  document.getElementById('numbercolor').style.color="white"
  document.getElementById('no1').style.color="white"
   document.body.style.backgroundColor="blue"
  if (first < 10) {
    setfirst(first + 1);
  }
  // eslint-disable-next-line
  else if (first=11){
    setfirst(0);
  }
};  
   const minimum = () => {
    document.getElementById('numbercolor').style.color="black"
    document.getElementById('no2').style.color="black"
    document.body.style.backgroundColor="purple"
  if (first > 0) {
    setfirst(first - 1);
  }
};
    return (
       <> 
     <button id="no1" className='count' onClick={maximum}>+</button>
      <h1 id="numbercolor">{first}</h1>
      <button id="no2" className='count1' onClick={minimum}>-</button>

<h1>
    <Link to='/assignment'> Assignment</Link>
    </h1>
     </>
    );
}
export default Counter
