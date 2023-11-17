import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { useLocation } from 'react-router-dom'
import { useState } from 'react';

function Game() {    
    const location = useLocation();
    const tableSettings = location.state.tableSettings;
    console.log(tableSettings)
    
    return (
        <div>Game:</div>
    )
}

export default Game;