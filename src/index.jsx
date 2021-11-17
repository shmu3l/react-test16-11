import React from "react";
import ReactDOM from "react-dom";

// Components
import GameList from './components/GameList'
import GameContextProvider from './contexts/GameContext'
// Style
import "./style.css";
import 'antd/dist/antd.css';



const App = () => {
  return (
    <GameContextProvider>
      <GameList />
    </GameContextProvider>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app-container"));
