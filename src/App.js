import { useState } from 'react';
import './App.css';

const App =  () =>{
  const [inpValue,setInpValue] = useState('')
  const [tododata,setTodoData] = useState([])

  const addtodohandler=()=>{
    setTodoData(prev=>[...prev,inpValue])
  }
  const editTodoHandler = (i) => {
    const todos = [...tododata]
    const editValue =  prompt('enter the replacment value')
    todos[i] = editValue
    // console.log(todos)
    setTodoData(todos)
  }

  const deleteTodo = (index)=> {
    const todos = [...tododata]
    const arr = todos.filter((e,i)=>i!==index)
    setTodoData(arr)
  }

  const deleteAll = () => {
    setTodoData([]);
  } 

  return(
    <div className='main_wrapper'>
      <h1 className='heading'>
        TODO LIST
      </h1>
    <input className='input' type='text' placeholder='Whats in Your Mind?' onChange={(e)=>setInpValue(e.target.value)}></input>
    <button className='button' onClick={addtodohandler}>Add</button><button className='button' onClick={deleteAll}>Delete All</button>
    <ul className='list'>
      {
        tododata.length ? tododata.map((e,i)=><li key={i}>{e} <button className='button-1' onClick={()=>deleteTodo(i)}>Delete</button> <button className='button-1' onClick={()=>editTodoHandler(i)}>Edit</button></li>) : <p className='para'>ADD YOUR TASK</p>
      }
      </ul>
      </div>
  )    
}
export default App;
