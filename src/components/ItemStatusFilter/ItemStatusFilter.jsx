import React, {Component} from 'react'
import './ItemStatusFilter.css'

export default class ItemStatusFilter extends Component {
    buttons_data = [
        {status: 'all', label: 'All'},
        {status: 'important', label: 'Important'},
        {status: 'active', label: 'Active'},
        {status: 'done', label: 'Done'},
    ]

    render() {
        const { filter, onFilterChange } = this.props
        const buttons = this.buttons_data.map(({status, label}) => {
            const isActive = filter === status
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button type = "button"
                        className={`btn ${clazz}`}
                        key={status}
                        onClick={() => onFilterChange(status) }>
                    {label}
                </button>
            )
        })

        return (
            <div className={"btn-group"}>
                {buttons}
            </div>
        )
    }
}
