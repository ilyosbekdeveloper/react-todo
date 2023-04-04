import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {

  const [todo, setTodo] = useState([
    {
      title: 'Text1',
      complated: false
    },
    {
      title: 'Text2',
      complated: true
    },
  ])
  const [input, setInput] = useState('')

  function addTask(){
      const newTask = {title: input,};
      setTodo([...todo, newTask]);
      setInput('')
  }
  let button  = input.length == '' && 'btn-none' || 'btn-block'
  const borderInput = input.length == '' && 'input' || 'inp'

  let complated = todo.filter((task)=> task.complated)
  const uncomplated = todo.filter((task)=> !task.complated)

  const changeComplated = (complatedStatus, index)=>{
    const copy = [...todo];
    copy[index].complated = complatedStatus
    setTodo(copy)
  }

  const remove = (index)=>{
    const copy = [...todo];
    copy.splice(index, 1);
    setTodo(copy)
  }

  const clearAllBtn = ()=>{
    setTodo([])
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="logo text-center text-white">
          <h1>Ilyosbek's Todo</h1>
        </div>

        <div className="input-group">
          <input type="text" className={`form-control ${borderInput}`}
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          />

          <button className={`btn ${button} plus`} 
          onClick={addTask}
          >
            <FontAwesomeIcon icon={faPlus}/>
          </button>
        </div>

        <div className="uls">
          <ul className='text-center'>
            {
              todo.map((todo, index)=>{
                return (
                  <li key={index} 
                  className={`${todo.complated && 'complated' || 'comp'} 
                  ${todo.complated && 'complated' || ''} 
                  d-flex align-items-center`}
                  onDoubleClick={()=> changeComplated(!todo.complated, index)}
                  >
                    <span>{todo.title}</span>

                    <button className='btn btn-primary' onClick={(index)=>   remove(index)}><FontAwesomeIcon icon={faTrash}/></button>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="d-flex justify-content-center my-3">
          <button className="btn btn-danger d-flex" 
          onClick={clearAllBtn}>
            Clear All
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
