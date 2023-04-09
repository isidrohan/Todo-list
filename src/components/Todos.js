import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  return (
    <>
    <div className="todo-heading">
      <h1>Todo List</h1>
      </div>
    <div className='container'>
      <div className='continer-item'>
      {props.todos.length===0?"No Todos To Display":

      props.todos.map((todo)=>{
          return <div> <TodoItem todo = {todo} key={todo.sno} ondelete = {props.ondelete}></TodoItem> </div>
      })
    }
      </div>
    </div>
    </>
  )
}


