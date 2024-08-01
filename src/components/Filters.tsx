/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { FILTERS__BUTTONS } from "../const"
import { type filterValue } from "../types"
interface Props {
    onFilterChange: (filter: filterValue) => void
    filterSelected: filterValue
}
export const Filters: React.FC<Props> = ({
    filterSelected, onFilterChange
}) => {
    return (
        <ul className="filters">
            {
                Object.entries(FILTERS__BUTTONS).map(([key, { literal, href }]) => (
                    <li key={key}>
                        <a
                            className={`${filterSelected === key ? "selected" : ""}`}
                            href={href}
                            onClick={(event) => {event.preventDefault() 
                            onFilterChange(key as filterValue)
                        }}
                        >
                        {literal}
                    </a>
                    </li>
    ))
}
            
        </ul >
    )
}