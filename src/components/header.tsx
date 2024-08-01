/* eslint-disable react/prop-types */
import { TodoTitle } from "../types"
import { CreateTodo } from "./CreateTodo"

/* eslint-disable react/react-in-jsx-scope */
interface Props {
    onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({
    onAddTodo
}) => {
    return (
        <header className="header">
            <h1> Todo <img style={{ width: "60px", height: "auto" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/345px-Typescript_logo_2020.svg.png" /></h1 >

            <CreateTodo saveTodo={onAddTodo} />
        </header >

    )
}