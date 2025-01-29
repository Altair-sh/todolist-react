import React from 'react'
import { AppHeader } from './AppHeader'
import { SearchPanel } from './SearchPanel'
import { TodoList } from './TodoList'

export const App = () => {
    const todoData = [
        { label: 'Drink Coffee', important: false },
        { label: 'Implement React Application', important: true },
        { label: 'Make notes from your stud', important: false },
        { label: 'Do not drink alchohol', important: false },
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos =  {todoData} />
        </div>
    )
}
