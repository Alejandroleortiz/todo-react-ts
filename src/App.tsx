import React, { useState } from "react"
import { Todos } from "./components/Todos"


const mockTodos = [

  {
    id: '1',
    title: 'Alejandro aprendiendo TS',
    completed: true
  },

  {
    id: '2',
    title: 'Lo voy a lograr',
    completed: false
  },

  {
    id: '3',
    title: 'Voy avanzando',
    completed: false,
  }
]



const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos 
      onRemoveTodo = {handleRemove}
      todos={todos} />
    </div>
  )
}
export default App