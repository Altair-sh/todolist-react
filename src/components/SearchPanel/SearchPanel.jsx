import React, {Component} from 'react'
import './SearchPanel.css'

export default class SearchPanel extends Component {
    state = {
        term: ''
    }

    onSearchChange = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.onSearchChange(term)
    }

    render() {
        return (
            <div className={"d-flex"}>
                <input  type = "text"
                        className = {"form-control search-input"}
                        placeholder={"type to search"}
                        value={this.state.term}
                        onChange={this.onSearchChange}/>
            </div>
        )
    }
}