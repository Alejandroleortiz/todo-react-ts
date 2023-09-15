import { FILTERS_BUTTONS, TODO_Filters } from "../consts"

interface Props {
    filterSelected: typeof TODO_Filters[keyof typeof TODO_Filters]
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
    return(
        <ul className = "filters" >
        <li>
        <a 
        className={`${filterSelected === 'all' ? 'selected' : ''}`}
        onClick={()=>{
            onFilterChange('all')
        }}
        >
            Todos
        </a>
        </li>
        <li></li>
        </ul >
    )
}