import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Table extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tableSettings: props.tableSettings
        }
    }
    
    render() {
        return <div>Табличка: {this.state.tableSettings.name}</div>
    }
}

export default Table;