import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom'

/**
 * Настройки игры: кол-во таблиц. Для каждой таблицы: размер, кол-во бомб
 */
const TableSettings = ({state, stateChanged}) => {
    console.log('State')
    console.log(state)
    const [name, setName] = useState(state.name)
    const [size, setSize] = useState(state.size)
    const [bombsCount, setBombsCount] = useState(state.bombsCount)
    const [tableWords, setTableWords] = useState(state.tableWords)
    
    return (
        <div className='tableSettings'>
            <h1>Введите Название таблицы</h1>
            <input id='tableName' type='text' value={name} onChange={e => ( setName(e.target.value), stateChanged({name: e.target.value}) )}></input>
            <h1>Введите кол-во бомб:</h1>
            <input id='tableBombCount' type='number' defaultValue={bombsCount} onChange={e => (setBombsCount(e.target.value), stateChanged({bombsCount: e.target.value}))}></input>
            <h1>Введите размер таблицы:</h1>
            <input id='tableSize' type='number' defaultValue={size} onChange={e => (setSize(e.target.value), stateChanged({size: e.target.value}))}></input>
            <h1>Введите слова для таблицы</h1>
            <input id='tableWords' type='text' value={tableWords} onChange={e => (setTableWords(e.target.value), stateChanged({tableWords: e.target.value}))}></input>
        </div>
    )
    
}

export default TableSettings;