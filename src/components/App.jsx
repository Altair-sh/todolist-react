import React from 'react'
import { AppHeader } from './AppHeader'
import { SearchPanel } from './SearchPanel'
import { TodoList } from './TodoList'

export const App = () => {
    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Implement React Application', important: true, id: 2 },
        { label: 'Make notes from your stud', important: false, id: 3 },
        { label: 'Do not drink alchohol', important: false, id: 4 },
    ]

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos = {todoData} />
        </div>
    )
}
