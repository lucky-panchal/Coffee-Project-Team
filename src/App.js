import React from "react";
import { Routes , Route, BrowserRouter} from 'react-router-dom'
import Assignment from "./components/Assignment";
import Form from "./components/Form";
import Todo from "./components/Todo";
import Filter from "./components/Filter"
import Counter from "./components/Counter";
function App() {
  return (
   <>
 <BrowserRouter>
 <Routes>
<Route path="/assignment" element={<Assignment/>}/> 
<Route path="/todo" element={<Todo/>}/> 
<Route path="/form" element={<Form/>}/> 
<Route path="/filter" element={<Filter/>}/> 
<Route path="/counter" element={<Counter/>}/> 
 </Routes>
 </BrowserRouter>
   </>

  );
}

export default App;
