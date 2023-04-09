import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {Todos} from './components/Todos';
import { AddTodo } from './components/AddTodo';
import { useEffect } from 'react';
// import {TodoItem} from './components/TodoItem'      
// import TodoItem from './components/TodoItem';


function App() {

  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const ondelete = (todo)=>{
      console.log("i am deleted",todo)
      setTodos(todos.filter((e)=>{
        return e!==todo;
      }))
      localStorage.setItem("todos",JSON.stringify(todos))
  }

  const addTodo = (title,desc)=>{
    console.log("i am adding this todo ",title,desc);
    let sno;
  if(todos.length===0){
    sno=0;
  }
  else{
    sno = todos[todos.length-1].sno+1;
  }
  const myTodo ={
    sno: sno,
    title: title,
    desc: desc,
  }
  setTodos([...todos,myTodo]);
  console.log(todos)
}

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  
  return (
  <>
    <Navbar></Navbar>
    <AddTodo addTodo={addTodo}></AddTodo>
    <Todos todos = {todos} ondelete = {ondelete}></Todos>
    {/* <TodoItem></TodoItem> */}
    </>
  );
}

export default App;

