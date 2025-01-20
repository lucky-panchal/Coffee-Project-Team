
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
  <div className="h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
  <div className="flex flex-col items-center space-y-4 p-6">
    <div className="flex space-x-2">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Your Input"
        className="w-full md:w-96 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-2 px-4 rounded-full"
        onClick={data}
      >
        Add
      </button>
    </div>
    <ul className="border bg-purple-500 md:w-96 space-y-2">
      {todoList.map((item, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-gray-100 p-2 rounded-lg shadow"
        >
          <span className=" text-gray-700">
            {index + 1}. {item}
          </span>
          <button
            className=" bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-2 px-4 rounded"
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