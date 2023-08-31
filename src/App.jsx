import { useEffect, useState } from "react"
import { NewTodosForm } from "./NewTodosForm";
import { TodoList } from "./TodoList";

export default function App(){
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    
    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodos(title){
    setTodos(correntTodos => {
      return [
        ...correntTodos,
        {id: crypto.randomUUID(), title, complated: false},
      ]
    })
  }

  function toggleTodo(id, complated){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, complated}
        }
        return todo;
      })
    })
  }
  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  
  return (
  <> 
    <NewTodosForm onSubmit={addTodos} />
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  </>
  )
}