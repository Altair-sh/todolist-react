import React, {Component} from 'react'
import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import TodoList from '../TodoList'
import ItemStatusFilter from '../ItemStatusFilter'
import ItemAddForm from '../ItemAddForm'
import './App.css'

export default class App extends Component {
    maxId = 1

    state = {
        term: '',
        filter: 'all',
        todoData: [
            this.createTodoItem('Drink Tea'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
        ]
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData} ) => {
            const idx = todoData.findIndex((element) => element.id === id)
            const newArray = todoData.toSpliced(idx, 1)
            return {
                todoData: newArray
            }
        })
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((element) => element.id === id)
        const oldItem = arr[idx]
        const newItem = {...oldItem, [propName]: !oldItem[propName]}
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx +1)
        ]
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text)
        this.setState(({todoData}) => {
            const newArray = [ ...todoData, newItem ]
            return {
                todoData: newArray
            }
        })
    }

    onSearchChange = (term) => {
        this.setState({term})
    }

    search(items, term) {
        if (term.length === 0)
            return items
        
        const termLower = term.toLowerCase()
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(termLower) > -1
        })
    }

    onFilterChange = (filter) => {
        this.setState({filter})
    }

    applyFilter(items, filter) {
        switch (filter) {
            case 'all':
                return items
            case 'active':
                return items.filter((item) => !item.done)
            case 'done':
                return items.filter((item) => item.done)
            case 'important':
                return items.filter((item) => !item.done && item.important)
            default:
                console.error(`invalid filter status '${filter}'`)
                return items
        }
    }

    render() {
        const { todoData, term, filter } = this.state
        const filteredItems = this.applyFilter(todoData, filter)
        const visibleItems = this.search(filteredItems, term)
        const doneCount = todoData.filter((element) => element.done).length
        const todoCount = todoData.length - doneCount

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <SearchPanel onSearchChange={this.onSearchChange}/>
                <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
                <TodoList todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant = {this.onToggleImportant}
                    onToggleDone = {this.onToggleDone}/>
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        )
    }
}
