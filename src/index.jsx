import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";

// Components
import GameList from './components/GameList'
import GameContextProvider from './contexts/GameContext'
import {
  getGames,
  deleteGame,
  postNewGame,
  getSingleGame,
  editGame,
} from "./game-service";
// Style
import "./style.css";
import 'antd/dist/antd.css';

const App = () => {
  const [games, setGames] = useState([]);
  const [newGame, setNewGame] = useState("");
  const [editGameItem, setEditGameItem] = useState({ name: "" })


  // const getGamesData = async () => {
  //   try {
  //     const games = await getGames();
  //     setGames(games);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const newGameFormSubmit = useCallback(
  //   async (event) => {
  //     event.preventDefault();
  //     if (!newGame.trim()) return;
  //     try {
  //       const saveGames = await postNewGame({ name: newGame });
  //       setGames([...games, saveGames]);
  //       setNewGame("");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
  //   [newGame, games]
  // );

  // const onNewGameChange = useCallback((event) => {
  //   setNewGame(event.target.value);
  // }, []);

  // const handleDeleteGame = async (gameId) => {
  //   try {
  //     const deleteGameRes = await deleteGame(gameId);
  //     setGames(games.filter(otherGame => otherGame.id !== deleteGameRes.id))
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // const getSignalGameEdit = async (gameId) => {
  //   try {
  //     const singleGame = await getSingleGame(gameId);
  //     setEditGameItem(singleGame)
  //     setIsEditModalVisible(true);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // const handleEditGame = async (newGame) => {
  //   console.log(editGameItem)
  // }

  return (
    <div>
      <GameContextProvider>
        <GameList />
      </GameContextProvider>
    </div >
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app-container"));
