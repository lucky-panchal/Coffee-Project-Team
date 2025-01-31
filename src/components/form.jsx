import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const Form = () => {
    const [name,setname]= useState("");
    const [email,setemail]= useState("");
    const [password,setpassword]=useState("");
   

    const SubmitFinal =async (e)=>{
        e.preventDefault();
        const forminquiry ={name,email,password};
        const response = await axios.post('http://localhost:3030/register',forminquiry)
        console.log(response)
        
    }
    
  return (
    <div>
      <form onSubmit={SubmitFinal}>
        <label>Name:-
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} required/>
        </label>
        <lable>
            
        Email:-
        <input type="text" value={email} onChange={(e) => setemail(e.target.value)} required/>    
           
        </lable>
    
        
        <lable>
            
            Age:-
            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} required/>    
                 
        </lable>

        <button type="submit">Submit Here</button>
      </form>
      
    </div>
  )
}

export default Form;
