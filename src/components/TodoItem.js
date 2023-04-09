
import React , {useState} from 'react'

export const TodoItem = ({todo,ondelete}) => {

  const [check, setCheck] = useState(false)
  const handleChange=(e)=>{
    setCheck(e.target.checked);

  }
  return (
    <>
    <div className='container-todo-item' >
      <h2>{todo.title}</h2>
      <p>{todo.desc}</p>
      <div >
        <label htmlFor="workdone" className='check-box-todoitem'>
        <input type="checkbox" name='check' onChange={handleChange}/>
          work done</label>
      </div>
      <button className='btn-todoitem' disabled={!check} onClick={()=>{ondelete(todo)}}>Delete</button>
    </div>
    <hr />
    </>
  )
} 

