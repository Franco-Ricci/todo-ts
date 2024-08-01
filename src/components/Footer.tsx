/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { filterValue } from "../types"
import { Filters } from "./Filters"

interface Props {
    activeCount: number,
    completeCount: number,
    onClearCompleted: () => void,
    filterSelected: filterValue,
    handleFilterChange: (filter: filterValue) => void
    
}
export const Footer: React.FC<Props> = ({
    activeCount = 0,
    completeCount = 0,
    filterSelected,
    handleFilterChange,
    onClearCompleted

}) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> tareas pendientes
            </span>
            <Filters filterSelected={filterSelected}
                onFilterChange={handleFilterChange}>
               
            </Filters>

            {completeCount > 0 && (
                <button className="clear-completed" onClick={onClearCompleted}>Borrar Completados</button>
            )}
        </footer>
    )
}