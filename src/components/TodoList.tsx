import TodoListItem from './TodoListItem'
import type {TodoItem} from '../types'
import './TodoList.css'

interface TodoListProps {
    todos: TodoItem[]
    onDeleted: (id: number) => void
    onToggleImportant: (id: number) => void
    onToggleDone: (id: number) => void
}

const TodoList = (props: TodoListProps) => {
    const elements = props.todos.map((item) => {
        const { id, ...itemProps } = item
        return (
            <li key={id} className={"list-group-item"}>
                <TodoListItem {...itemProps}
                    onDeleted={() => props.onDeleted(id)}
                    onToggleImportant={() => props.onToggleImportant(id)}
                    onToggleDone={() => props.onToggleDone(id)}/>
            </li>
        )
    })

    return (
        <ul className={"list-group todo-list"}>
            {elements}
        </ul>
    )
}

export default TodoList
