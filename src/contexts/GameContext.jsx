import React, { createContext, useState, useEffect } from 'react'
import {
  getGames,
  deleteGame,
  postNewGame,
  getSingleGame,
  editGame,
} from "../game-service";

export const GameContext = createContext()

const GameContextProvider = (props) => {
  const [games, setGames] = useState([])

  useEffect(() => {
    getGamesData()
  }, [])

  const getSignalGameEdit = async (gameId) => {
    try {
      const singleGame = await getSingleGame(gameId);
      return singleGame
    } catch (err) {
      console.log(err);
    }
  }

  const getGamesData = async () => {
    try {
      const games = await getGames();
      setGames(games);
    } catch (err) {
      console.log(err);
    }
  };

  const handleNewGame = async (newGame) => {
    if (!newGame.trim()) return;
    try {
      const saveGames = await postNewGame({ name: newGame });
      setGames([...games, saveGames]);
    } catch (err) {
      console.log(err);
    }
  }


  const handleEditGame = async (gameId, editGameObj) => {
    try {
      const editGameRes = await editGame(gameId, editGameObj);
      const updatedGames = games.map(el => el.id === editGameRes.id ? editGameRes : el)
      setGames(updatedGames);
    } catch (err) {
      console.log(err);
    }
  }

  const handleDeleteGame = async (gameId) => {
    try {
      const deleteGameRes = await deleteGame(gameId);
      setGames(games.filter(otherGame => otherGame.id !== deleteGameRes.id))
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <GameContext.Provider value={{ games, handleNewGame, getSignalGameEdit, handleEditGame, handleDeleteGame }}>
      {props.children}
    </GameContext.Provider>
  )
}

export default GameContextProvider