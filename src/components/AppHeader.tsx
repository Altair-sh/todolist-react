import './AppHeader.css'

interface AppHeaderProps {
    toDo: number
    done: number
}

const AppHeader = (props: AppHeaderProps) => {
    return (
        <div className={"app-header d-flex"}>
            <h1>Todo List</h1>
            <h2>{props.toDo} more to do, {props.done} done</h2>
        </div>
    )
}

export default AppHeader
