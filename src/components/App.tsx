import {useRef, useState} from 'react'
import AppHeader from './AppHeader'
import SearchPanel from './SearchPanel'
import TodoList from './TodoList'
import ItemStatusFilter from './ItemStatusFilter'
import ItemAddForm from './ItemAddForm'
import type {FilterStatus, TodoItem} from './../types'
import './App.css'

type BooleanTodoProperty = 'important' | 'done'

function createTodoItem(label: string, id: number): TodoItem {
    return {
        label,
        important: false,
        done: false,
        id
    }
}

const initialTodos: TodoItem[] = [
    'Drink Tea',
    'Make Awesome App',
    'Have a lunch',
].map((label, i) => createTodoItem(label, i + 1))

function toggleProperty(items: TodoItem[], id: number, propName: BooleanTodoProperty): TodoItem[] {
    return items.map((item) =>
        item.id === id ? {...item, [propName]: !item[propName]} : item
    )
}

function search(items: TodoItem[], term: string): TodoItem[] {
    if (term.length === 0)
        return items

    const termLower = term.toLowerCase()
    return items.filter((item) => {
        return item.label.toLowerCase().indexOf(termLower) > -1
    })
}

function applyFilter(items: TodoItem[], filter: FilterStatus): TodoItem[] {
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

const App = () => {
    const nextId = useRef(initialTodos.length + 1)
    const [todoData, setTodoData] = useState<TodoItem[]>(initialTodos)
    const [term, setTerm] = useState('')
    const [filter, setFilter] = useState<FilterStatus>('all')

    const deleteItem = (id: number) => {
        setTodoData((todos) => todos.filter((item) => item.id !== id))
    }

    const onToggleImportant = (id: number) => {
        setTodoData((todos) => toggleProperty(todos, id, 'important'))
    }

    const onToggleDone = (id: number) => {
        setTodoData((todos) => toggleProperty(todos, id, 'done'))
    }

    const addItem = (text: string) => {
        const newItem = createTodoItem(text, nextId.current++)
        setTodoData((todos) => [...todos, newItem])
    }

    const visibleItems = search(applyFilter(todoData, filter), term)
    const doneCount = todoData.filter((element) => element.done).length
    const todoCount = todoData.length - doneCount

    return (
        <div className="todo-app">
            <AppHeader toDo={todoCount} done={doneCount}/>
            <ItemAddForm onItemAdded={addItem}/>
            <SearchPanel onSearchChange={setTerm}/>
            <ItemStatusFilter filter={filter} onFilterChange={setFilter}/>
            <TodoList todos={visibleItems}
                onDeleted={deleteItem}
                onToggleImportant={onToggleImportant}
                onToggleDone={onToggleDone}/>
        </div>
    )
}

export default App
