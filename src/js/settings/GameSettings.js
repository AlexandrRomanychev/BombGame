import React, { Component } from 'react'
import TableSettings from './TableSettings';
import { useState } from 'react';
import { Link} from 'react-router-dom';
// import { GameRoute } from '../game/GameRoute';

let nextTableId = 0;

/**
 * Настройки игры: кол-во таблиц. Для каждой таблицы: размер, кол-во бомб
 */
class GameSettings extends Component {
    // const [tableSettings, setTableSettings] = useState([])
    // console.log('settings')
    // console.log(tableSettings)
    constructor(props) {
        super(props);
        this.state = {
            tableSettings : []
        }
        this.removeTableSetting = this.removeTableSetting.bind(this);
    }

    render() {
        return (
            <div id='tableSettings'>
                <button onClick={() => this.setState({tableSettings: [...this.state.tableSettings, { id: nextTableId++, name: '', size: 1, bombsCount: 0, tableWords: '' }]})}>
                Добавить таблицу</button>
                <Link to="/game" state={{ tableSettings: this.state.tableSettings }}>Играть</Link>
                {
                    this.state.tableSettings.map(item => {
                        return (
                            <div>
                                <TableSettings
                                    key = {nextTableId}
                                    state={item} 
                                    stateChanged = {
                                        state => {
                                            item.name = state.name != undefined ? state.name : item.name;
                                            item.size = state.size != undefined ? state.size : item.size;
                                            item.bombsCount = state.bombsCount != undefined ? state.bombsCount : item.bombsCount;
                                            item.tableWords = state.tableWords != undefined ? state.tableWords : item.tableWords
                                        }
                                    }
                                /> 
                                <img onClick={() => this.removeTableSetting(item.id)} src='img/recycle-bin.png' width={20} height={20}></img>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    

    /**
     * Удалить информацию о таблице
     */
    removeTableSetting(tableId)  {
        console.log(tableId)
        this.setState({tableSettings: this.state.tableSettings.filter(tableInfo => tableInfo.id != tableId)})
        console.log('Delete table settings')
    }
}

export default GameSettings;