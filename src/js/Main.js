import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GameSettings from './settings/GameSettings';
import Game from './game/Game';

const Main = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<GameSettings />}></Route>
          <Route path='game' element={<Game />}></Route>
        </Routes>
    </Router>
  );
}
export default Main;