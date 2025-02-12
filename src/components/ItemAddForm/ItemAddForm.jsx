import React, { Component } from 'react'
import './ItemAddForm.css'

export default class ItemAddForm extends  Component {
    render() {
        const { onItemAdded } = this.props
        return (
            <div className={"item-add-form"}>
                <button className={"btn btn-outline-secondary"}
                        onClick={() => onItemAdded('Example')}>
                    Add Item
                </button>
            </div>
        )
    }
}
