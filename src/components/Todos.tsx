
import { TodoId, type ListOfTodos, type Todo as TodoType } from "../types"
import { Todo } from "./Todo"
import React from "react"

interface Props {
    todos: ListOfTodos
    removeTodo: ({id}: TodoId) => void
    onToggleCompleted: ({id, completed}: Pick<TodoType, "id" | "completed">)  => void
}
export const Todos: React.FC<Props> = ({ todos, removeTodo, onToggleCompleted }) => {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo id={todo.id} title={todo.title} completed={todo.completed} removeTodo={removeTodo}  onToggleCompleted={onToggleCompleted}/>
                </li>

            ))}
        </ul>
    )
}