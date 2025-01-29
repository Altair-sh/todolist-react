import React from 'react'

export const SearchPanel = () => {
    const searchText = 'Type here to search'
    const searchStyle = {
        fontSize: '20px'
    }

    return <input
        style={searchStyle}
        placeholder={searchText}
        disabled={true} />
}
