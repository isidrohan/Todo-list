
import React, {useState} from 'react'

export const AddTodo = ({addTodo}) => {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const onSubmit=(e)=>{
    e.preventDefault()
    if(!title||!desc){
      alert("title or desc can't be empty")
    }
    else{
      addTodo(title,desc)
      setTitle("");
      setDesc("");

    }
  }
  return (
    <>
    <div className="container-addtodo">
        <h1>Add a Todo</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="title" className='label-title'>Todo Title</label>
          <textarea type="text" placeholder='Enter The Title...' value={title} onChange={(e)=>{setTitle(e.target.value)}} className='input-title' />
          <label htmlFor="title" className='label-desc'>Todo Description</label>
          <textarea name="text" placeholder='Enter The des...' className='input-desc' value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="" cols="30" rows="10"></textarea>
          {/* <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}className='input-desc' /> */}
            <button className='btn-addtodo'>Add Todo</button>
        </form>
    </div>
    </>
  )
}
