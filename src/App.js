import React from "react";
import { Routes , Route, BrowserRouter, } from 'react-router-dom'

import Signin from "./components/Signin ";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Forgetpass from "./components/Forgetpass";
import Validate from "./components/Validate";
function App() {
  return (
   <>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/validate" element={<Validate/>}/>
<Route path="/register" element={<Signup/>}/> 
<Route path="/login" element={<Signin/>}/> 
<Route path="/forgotpass" element={<Forgetpass/>}/> 
 </Routes>
 </BrowserRouter>
   </>

  );
}

export default App;
