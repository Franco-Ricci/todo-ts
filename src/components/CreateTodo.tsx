/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react"
import { TodoTitle } from "../types"

interface Props {
    saveTodo: ({ title }: TodoTitle) => void
}
export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
    const [inputValue, setInputValue] = useState(" ")

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        saveTodo({ title: inputValue })
        setInputValue("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className="new-todo" placeholder="What needs to be done" value={inputValue} onChange={(evt) => {setInputValue(evt.target.value)}} />
        </form>

    )
}
