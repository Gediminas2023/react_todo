import { useEffect, useState } from "react"
import { Loading } from "./Loading"
import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}){
  const [time, setTime] = useState(false);


  const Time = () => {
    setTimeout(() => {
      setTime(true);
    },3000)
  }

  useEffect(() => {
    Time();
  },[]);

    return (
    <ul className="list">
      {!todos.length == 0 ? "" : "Item list is empty..."}
      {!time && todos.length == 0 ? <Loading /> : ""} 
      {todos.map(todo => {
          return (
              <TodoItem 
                  id={todo.id} 
                  complated={todo.complated} 
                  title={todo.title} 
                  key={todo.id}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
              />
          )
      })}
      
    </ul>
    )
}