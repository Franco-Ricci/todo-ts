import React from "react"
import { TodoId, type Todo as TodoType } from "../types"

interface Props extends TodoType {
    removeTodo: ({id}:TodoId) => void;
    onToggleCompleted: ({id, completed}: Pick<TodoType, "id" | "completed">)  => void
}
export const Todo: React.FC<Props> = ({ id, title, completed, removeTodo, onToggleCompleted }) => {
    return (
        <div>
            <input className="toggle" type="checkbox"
                checked={completed} onChange={(event) => { onToggleCompleted({id, completed: event.target.checked}) }} />
            <label>{title}</label>
            <button className="destroy" onClick={() => removeTodo({id})}></button>
        </div>
    )
}