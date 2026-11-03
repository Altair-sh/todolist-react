import {useState, type ChangeEvent, type SubmitEvent} from 'react'
import './ItemAddForm.css'

interface ItemAddFormProps {
    onItemAdded: (label: string) => void
}

const ItemAddForm = (props: ItemAddFormProps) => {
    const [label, setLabel] = useState('')

    const onLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLabel(e.currentTarget.value)
    }

    const onSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.onItemAdded(label)
        setLabel('')
    }

    return (
        <form className={"item-add-form d-flex"}
                onSubmit={onSubmit}>
            <input type={"text"}
                    className={"form-control"}
                    onChange={onLabelChange}
                    placeholder={"What need to be done"}
                    value={label}/>
            <button className={"btn btn-outline-secondary"}>
                Add Item
            </button>
        </form>
    )
}

export default ItemAddForm
