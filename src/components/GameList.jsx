import React, { useContext } from 'react'
import { Typography, Row, Col, Divider, Empty } from 'antd';
import styled from "styled-components";
import { GameContext } from '../contexts/GameContext'
import GameItem from './GameItem'
import AddGameForm from './AddGameForm'
const { Title, Text } = Typography;

const ListWrapper = styled.div`
  height: 400px;
  overflow: scroll;
  padding: 0 16px;
  border: 1px solid rgba(140, 140, 140, 0.35);
  `
const GameList = () => {
  const { games } = useContext(GameContext)



  return (
    <Row>
      <Col span={24}>
        <Row align="middle" wrap={false}>
          <Col flex="auto">
            <Title>Game Library</Title>
          </Col>
          <Col>
            <AddGameForm />
          </Col>
        </Row>
      </Col>
      <Divider />
      <Col span={24}>
        <ListWrapper>
          {games.length === 0 ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={
              <span>
                There are no games in the library
              </span>
            } />
          ) : (games.map(game => (
            <div key={game.id}>
              <GameItem game={game} />
            </div>
          )))
          }
        </ListWrapper>
      </Col>
      <Col span={24}>
        <Text type="secondary">Total : {games.length}</Text>
      </Col>
    </Row>
  )
}

export default GameList
