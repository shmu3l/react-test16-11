import React, { useState, useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import GameItem from './GameItem'
import AddGameForm from './AddGameForm'

const GameList = () => {
  const { games } = useContext(GameContext)

  return (
    <div>
      <div>
        <AddGameForm />
      </div>
      <div>
        {games.map(game => (
          <div key={game.id}>
            <GameItem game={game} />
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default GameList
