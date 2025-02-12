import React, {Component} from 'react'
import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import TodoList from '../TodoList'
import ItemStatusFilter from '../ItemStatusFilter'
import ItemAddForm from '../ItemAddForm'
import './App.css'

export default class App extends Component {
    maxId = 100

    state = {
        todoData: [
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'React Application', important: true, id: 2 },
            { label: 'Make notes from your stud', important: false, id: 3 },
            { label: 'Do not drink alchohol', important: false, id: 4 },
        ]
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

    addItem = (text) => {
        console.log('add', text)
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        }
        this.setState(({todoData}) => {
            const newArray = [ ...todoData, newItem ]
            return {
                todoData: newArray
            }
        })
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todos={this.state.todoData}
                    onDeleted={this.deleteItem}/>
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        )
    }
}
