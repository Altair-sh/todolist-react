import type {FilterStatus} from '../types'
import './ItemStatusFilter.css'

interface ItemStatusFilterProps {
    filter: FilterStatus
    onFilterChange: (filter: FilterStatus) => void
}

interface FilterButton {
    status: FilterStatus
    label: string
}

const buttonsData: readonly FilterButton[] = [
    {status: 'all', label: 'All'},
    {status: 'important', label: 'Important'},
    {status: 'active', label: 'Active'},
    {status: 'done', label: 'Done'},
]

const ItemStatusFilter = (props: ItemStatusFilterProps) => {
    const buttons = buttonsData.map(b => {
        const isActive = props.filter === b.status
        const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={b.status}
                    onClick={() => props.onFilterChange(b.status)}>
                {b.label}
            </button>
        )
    })

    return (
        <div className={"btn-group item-status-filter"}>
            {buttons}
        </div>
    )
}

export default ItemStatusFilter
