import React from 'react'
import './SearchPanel.css'

export const SearchPanel = () => {
    return (
        <input type = "text"
                className = {"form-control search-input"}
                placeholder={"type to search"} />
    )
}
