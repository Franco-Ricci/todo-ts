/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from "react"
import { Todos } from "./components/Todos"
import { TodoId, Todo, filterValue, TodoTitle } from "./types"
import { TODO_FILTERS } from "./const"
import { Footer } from "./components/Footer"
import { Header } from "./components/header"
/* eslint-disable react/react-in-jsx-scope */
const mockTodos = [
  { id: '1', title: 'Tarea 1', completed: true },
  { id: '2', title: 'Todo 2', completed: false },
  { id: '3', title: 'Todo 3', completed: false },
]
const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState(TODO_FILTERS.ALL)
  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)

  }

  // {id: TodoId, completed: TodoCompleted})
  const handleCompleted = ({ id, completed }: Pick<Todo, "id" | "completed">): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: filterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false

    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <>
      <div className="todoapp">
        <Header onAddTodo={handleAddTodo}></Header>
        <Todos todos={filteredTodos} removeTodo={handleRemove} onToggleCompleted={handleCompleted}
        />

        <Footer activeCount={activeCount} filterSelected={filterSelected} handleFilterChange={handleFilterChange} completeCount={completedCount}
          onClearCompleted={handleRemoveAllCompleted} />
      </div>
    </>
  )
}

export default App
