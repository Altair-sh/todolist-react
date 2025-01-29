import React from 'react'
import { AppHeader } from './AppHeader'
import { SearchPanel } from './SearchPanel'
import { TodoList } from './TodoList'

export const App = () => {
    const value = '<script>alert ("")</script>'
    // const isLoggedIn = false
    // const loginBox = <span>Log in to the system</span>
    // const welcomeBox = <span>Welcome Back</span>
    return (
        <div>
            {/*{ isLoggedIn ? null : loginBox }*/}
            {value}
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
}
