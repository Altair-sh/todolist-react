import {useState, type ChangeEvent, type FormEvent} from 'react'
import './ItemAddForm.css'

interface ItemAddFormProps {
    onItemAdded: (label: string) => void
}

const ItemAddForm = (props: ItemAddFormProps) => {
    const [label, setLabel] = useState('')

    const onLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLabel(e.target.value)
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
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
