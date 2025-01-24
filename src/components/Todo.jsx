
import React, { useState } from "react";
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodolist] = useState([]);
  const data = () => {
    setTodolist([...todoList, todo]);
    console.log(todo);
    setTodo("");
  };
  const removeTodo=(index)=>{
     const updateTodo=[...todoList]
     updateTodo.splice(index,1);
     setTodolist(updateTodo)
  }
  

  
return (
  <div >
  <div >
    <div >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Your Input"
       
      />
      <button
        
        onClick={data}
      >
        Add
      </button>
    </div>
    <ul>
      {todoList.map((item, index) => (
        <li
          key={index}
          
        >
          <span>
            {index + 1}. {item}
          </span>
          <button
           
            onClick={() => removeTodo(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
  </div>
)};
 export default Todo;