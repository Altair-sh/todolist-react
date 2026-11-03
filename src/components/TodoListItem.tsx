import type {TodoItem} from '../types'
import './TodoListItem.css'

interface TodoListItemProps extends Omit<TodoItem, 'id'> {
    onDeleted: () => void
    onToggleImportant: () => void
    onToggleDone: () => void
}

const TodoListItem = (props: TodoListItemProps) => {
    let classNames = 'todo-list-item'
    if (props.done) {
        classNames += ' done'
    }
    if (props.important) {
        classNames += ' important'
    }

    return (
        <span className={classNames}>
            <span
                    className={"todo-list-item-label"}
                    onClick={props.onToggleDone}>
                {props.label}
            </span>
            <button type={"button"}
                    className={"btn btn-outline-success btn-sm float-right"}
                    onClick={props.onToggleImportant}>
                <i className={"fa fa-exclamation"} />
            </button>
            <button type={"button"}
                    className={"btn btn-outline-danger btn-sm float-right"}
                    onClick={props.onDeleted}>
                <i className={"fa fa-trash-o"} />
            </button>
        </span>
    )
}

export default TodoListItem
