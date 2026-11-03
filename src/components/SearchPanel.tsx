import {useState, type ChangeEvent} from 'react'
import './SearchPanel.css'

interface SearchPanelProps {
    onSearchChange: (term: string) => void
}

const SearchPanel = (props: SearchPanelProps) => {
    const [term, setTerm] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newTerm = e.target.value
        setTerm(newTerm)
        props.onSearchChange(newTerm)
    }

    return (
        <div className={"d-flex"}>
            <input type="text"
                    className={"form-control search-input"}
                    placeholder={"type to search"}
                    value={term}
                    onChange={onChange}/>
        </div>
    )
}

export default SearchPanel
