import React from 'react'
import { useState } from 'react';
import "./Addition.css"
function App() {
  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState();
  const [result, setresult] = useState();
  const [name,setname]=useState("Lucky");
  const add = () => {
    setresult(parseInt(num1) + parseInt(num2));
  };
  
const click =() =>{
  if(name === 'lucky'){
    setname("panchal")
  }else{
   setname("lucky")
  }
}
  const randomcolor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <div style={{ backgroundColor: randomcolor() }}>
      <input type="number" value={num1} onChange={(e) => setnum1(e.target.value)} />
      <input type="number" value={num2} onChange={(e) => setnum2(e.target.value)} />
      <button onClick={add}>Sum</button>
     <p>Result= {result}</p>
     {name}
     <button onClick={click}>Changed</button>

    </div>



    
  );
}
export default App;
    