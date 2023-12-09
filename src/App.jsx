import { useState } from 'react'
import './App.css'

function App() {
  const [todo , setTodo] = useState([])
  const [item , setItem] = useState("")
  const changeItem = (e) => {
    setItem(e.target.value)
  }

  const addTodo = () => {
    setTodo([...todo , item])
    setItem("")
  }

  const editItem = (index,e) => {
    const updateItem = [...todo]
    updateItem[index] = e.target.value
    setTodo(updateItem)
  }

  const deleteTodo = (index) => {
    const updateItem = [...todo]
    updateItem.splice(index,1)
    setTodo(updateItem)
  }

  return (
    <>
      <div className="container">
        <div className="add">
          <input className="input" type="text" value={item} placeholder="Add Todo" onChange={(e) => changeItem(e)} />
          <button className="btn" onClick={addTodo}>Add</button>
        </div>
        <div className="show">
          {todo.map((item,index) => (
            <div key = {index}>
              <input className="input" type="text" value={item} onChange={(e) => editItem(index,e)} />
              <button className="delete" onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          )
          )}
          </div>
      </div>
    </>
  )
}

export default App
