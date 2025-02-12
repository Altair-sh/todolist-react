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
            console.log('delete', id)
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
        console.log('toggle important', id)
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    onToggleDone = (id) => {
        console.log('toggle done', id)
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }

    addItem = (text) => {
        console.log('add', text)
        const newItem = this.createTodoItem(text)
        this.setState(({todoData}) => {
            const newArray = [ ...todoData, newItem ]
            return {
                todoData: newArray
            }
        })
    }

    render() {
        const { todoData } = this.state
        const doneCount = todoData.filter((element) => element.done).length
        const todoCount = todoData.length - doneCount

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant = {this.onToggleImportant}
                    onToggleDone = {this.onToggleDone}/>
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        )
    }
}
